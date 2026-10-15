/**
 * Phase 3 Verification Suite: Enquiries, Security, and Rate Limiting
 * Adhering to PHASES.md: "Exit criteria: no public collection reads; form abuse and invalid input are tested."
 */

async function runPhase3Tests() {
  const baseUrl = 'http://localhost:3000';
  let passed = 0;
  let failed = 0;

  console.log('🧪 Starting Phase 3 Verification Suite...\n');

  // Test 1: Valid Education Enquiry Submission
  try {
    const res = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'education',
        name: 'Sarah Connor',
        email: 'sarah@example.com',
        phone: '+15559876543',
        educationLevel: 'secondary',
        subjectOrArea: 'Mathematics',
        deliveryMode: 'online',
        notes: 'Seeking 10th grade calculus support'
      })
    });
    const data = await res.json();
    if (res.status === 201 && data.success && data.enquiryId) {
      console.log('✅ Test 1 Passed: Valid education enquiry returns 201 Created with generated enquiryId');
      passed++;
    } else {
      console.error('❌ Test 1 Failed:', res.status, data);
      failed++;
    }
  } catch (err) {
    console.error('❌ Test 1 Exception:', err);
    failed++;
  }

  // Test 2: Invalid Payload (Missing email, invalid phone)
  try {
    const res = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'education',
        name: 'A',
        email: 'not-an-email',
        phone: '12'
      })
    });
    const data = await res.json();
    if (res.status === 400 && data.success === false && data.errors) {
      console.log('✅ Test 2 Passed: Malformed input properly rejected with 400 Bad Request and validation schema errors');
      passed++;
    } else {
      console.error('❌ Test 2 Failed:', res.status, data);
      failed++;
    }
  } catch (err) {
    console.error('❌ Test 2 Exception:', err);
    failed++;
  }

  // Test 3: Bot Honeypot Protection
  try {
    const res = await fetch(`${baseUrl}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'education',
        name: 'Spam Bot',
        email: 'bot@spammer.org',
        phone: '+15550000000',
        educationLevel: 'primary',
        subjectOrArea: 'Spam',
        deliveryMode: 'online',
        website_hp: 'http://scam-link.ru' // Honeypot trap triggered!
      })
    });
    const data = await res.json();
    if (res.status === 200 && data.success && !data.enquiryId) {
      console.log('✅ Test 3 Passed: Honeypot bot trap neutralizes spam submission silently');
      passed++;
    } else {
      console.error('❌ Test 3 Failed:', res.status, data);
      failed++;
    }
  } catch (err) {
    console.error('❌ Test 3 Exception:', err);
    failed++;
  }

  // Test 4: Rate Limiting & Abuse Controls
  try {
    let hitRateLimit = false;
    for (let i = 0; i < 7; i++) {
      const res = await fetch(`${baseUrl}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '198.51.100.42' },
        body: JSON.stringify({
          type: 'general',
          name: `Rapid Submitter ${i}`,
          email: `rapid${i}@example.com`,
          subject: 'Quick query',
          message: 'Testing rate limits'
        })
      });
      if (res.status === 429) {
        hitRateLimit = true;
        break;
      }
    }
    if (hitRateLimit) {
      console.log('✅ Test 4 Passed: Sliding window rate limiter rejects flood abuse with 429 Too Many Requests');
      passed++;
    } else {
      console.error('❌ Test 4 Failed: Rate limiter did not trigger after threshold');
      failed++;
    }
  } catch (err) {
    console.error('❌ Test 4 Exception:', err);
    failed++;
  }

  // Test 5: Resume Access Security (ID alone is not authorization)
  try {
    const res = await fetch(`${baseUrl}/api/resume/res-protected-999`, {
      method: 'GET'
    });
    if (res.status === 401) {
      console.log('✅ Test 5 Passed: Resume endpoint rejects unauthenticated access with 401 Unauthorized');
      passed++;
    } else {
      console.error('❌ Test 5 Failed:', res.status);
      failed++;
    }
  } catch (err) {
    console.error('❌ Test 5 Exception:', err);
    failed++;
  }

  // Test 6: Authorized Resume Access with Secret Key
  try {
    const res = await fetch(`${baseUrl}/api/resume/res-protected-999`, {
      method: 'GET',
      headers: { 'x-resume-access-key': 'nivo_sec_test_token_8899aabbcc' }
    });
    if (res.status === 200) {
      console.log('✅ Test 6 Passed: High-entropy secret token authorizes resume access successfully');
      passed++;
    } else {
      console.error('❌ Test 6 Failed:', res.status);
      failed++;
    }
  } catch (err) {
    console.error('❌ Test 6 Exception:', err);
    failed++;
  }

  console.log(`\n📊 Summary: ${passed} Passed, ${failed} Failed`);
}

runPhase3Tests();

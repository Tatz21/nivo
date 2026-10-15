import { jsPDF } from 'jspdf';
import { ResumeData } from '@/lib/types/resume';

/**
 * Generates an ATS-compliant, selectable vector text PDF using jsPDF.
 * PRD Rule 21: "PDF export must create a real document, not a screenshot."
 */
export function exportResumeToPDF(resume: ResumeData): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // Convert hex color to RGB
  const hexToRgb = (hex: string) => {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const accentRgb = hexToRgb(resume.accentColor || '#6554F5');

  // Header - Full Name
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 30);
  doc.text(resume.personalInfo.fullName || 'Untitled Candidate', margin, y);
  y += 24;

  // Header - Title
  if (resume.personalInfo.jobTitle) {
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(13);
    doc.setTextColor(accentRgb.r, accentRgb.g, accentRgb.b);
    doc.text(resume.personalInfo.jobTitle, margin, y);
    y += 18;
  }

  // Header - Contact Details Line
  const contactParts: string[] = [];
  if (resume.personalInfo.email) contactParts.push(resume.personalInfo.email);
  if (resume.personalInfo.phone) contactParts.push(resume.personalInfo.phone);
  if (resume.personalInfo.location) contactParts.push(resume.personalInfo.location);
  if (resume.personalInfo.website) contactParts.push(resume.personalInfo.website);

  if (contactParts.length > 0) {
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(90, 90, 100);
    const contactLine = contactParts.join('  •  ');
    doc.text(contactLine, margin, y);
    y += 16;
  }

  // Links line (LinkedIn, GitHub)
  const links: string[] = [];
  if (resume.personalInfo.linkedin) links.push(`LinkedIn: ${resume.personalInfo.linkedin}`);
  if (resume.personalInfo.github) links.push(`GitHub: ${resume.personalInfo.github}`);
  if (links.length > 0) {
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(110, 110, 125);
    doc.text(links.join('  |  '), margin, y);
    y += 18;
  }

  // Divider Rule
  doc.setDrawColor(accentRgb.r, accentRgb.g, accentRgb.b);
  doc.setLineWidth(1.5);
  doc.line(margin, y, margin + contentWidth, y);
  y += 20;

  // Helper for Section Headers
  const renderSectionHeader = (title: string) => {
    checkPageBreak(35);
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(accentRgb.r, accentRgb.g, accentRgb.b);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(220, 220, 230);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 16;
  };

  // Professional Summary
  if (resume.summary && resume.summary.trim()) {
    renderSectionHeader('Professional Summary');
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 60);
    const splitSummary = doc.splitTextToSize(resume.summary.trim(), contentWidth);
    checkPageBreak(splitSummary.length * 14);
    doc.text(splitSummary, margin, y);
    y += splitSummary.length * 14 + 16;
  }

  // Work Experience
  if (resume.experiences && resume.experiences.length > 0) {
    renderSectionHeader('Experience');
    for (const exp of resume.experiences) {
      checkPageBreak(40);
      
      // Role & Dates
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(25, 25, 35);
      doc.text(exp.role, margin, y);

      const dateStr = `${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}`;
      const dateWidth = doc.getTextWidth(dateStr);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(100, 100, 115);
      doc.text(dateStr, margin + contentWidth - dateWidth, y);
      y += 14;

      // Company & Location
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(70, 70, 85);
      const companyLocation = exp.location ? `${exp.company} — ${exp.location}` : exp.company;
      doc.text(companyLocation, margin, y);
      y += 14;

      // Bullet highlights
      if (exp.highlights && exp.highlights.length > 0) {
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(60, 60, 70);

        for (const hl of exp.highlights) {
          if (!hl.trim()) continue;
          const bulletPrefix = '• ';
          const fullBullet = `${bulletPrefix}${hl.trim()}`;
          const splitHl = doc.splitTextToSize(fullBullet, contentWidth - 10);
          checkPageBreak(splitHl.length * 13);
          doc.text(splitHl, margin + 8, y);
          y += splitHl.length * 13 + 3;
        }
      }
      y += 10;
    }
  }

  // Education
  if (resume.education && resume.education.length > 0) {
    renderSectionHeader('Education');
    for (const edu of resume.education) {
      checkPageBreak(35);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(25, 25, 35);
      doc.text(edu.degree, margin, y);

      const eduDate = `${edu.startDate} - ${edu.endDate}`;
      const eduDateWidth = doc.getTextWidth(eduDate);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(100, 100, 115);
      doc.text(eduDate, margin + contentWidth - eduDateWidth, y);
      y += 14;

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9.5);
      doc.setTextColor(70, 70, 85);
      const instLocation = edu.location ? `${edu.institution} — ${edu.location}` : edu.institution;
      doc.text(instLocation, margin, y);
      y += 14;

      if (edu.grade) {
        doc.setFontSize(9);
        doc.setTextColor(110, 110, 125);
        doc.text(`Grade/Honor: ${edu.grade}`, margin + 8, y);
        y += 13;
      }
      y += 8;
    }
  }

  // Skills
  if (resume.skillCategories && resume.skillCategories.length > 0) {
    renderSectionHeader('Skills & Competencies');
    for (const cat of resume.skillCategories) {
      checkPageBreak(25);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(35, 35, 45);
      const catLabel = `${cat.categoryName}: `;
      doc.text(catLabel, margin, y);
      
      const labelWidth = doc.getTextWidth(catLabel);
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(60, 60, 70);
      const skillsLine = cat.skills.join(', ');
      const splitSkills = doc.splitTextToSize(skillsLine, contentWidth - labelWidth);
      doc.text(splitSkills, margin + labelWidth, y);
      y += splitSkills.length * 13 + 6;
    }
    y += 8;
  }

  // Projects
  if (resume.projects && resume.projects.length > 0) {
    renderSectionHeader('Projects');
    for (const proj of resume.projects) {
      checkPageBreak(35);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(25, 25, 35);
      doc.text(proj.title, margin, y);
      
      if (proj.url) {
        const urlWidth = doc.getTextWidth(proj.url);
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(accentRgb.r, accentRgb.g, accentRgb.b);
        doc.text(proj.url, margin + contentWidth - urlWidth, y);
      }
      y += 13;

      if (proj.description) {
        doc.setFont('Helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(60, 60, 70);
        const splitDesc = doc.splitTextToSize(proj.description, contentWidth);
        checkPageBreak(splitDesc.length * 13);
        doc.text(splitDesc, margin, y);
        y += splitDesc.length * 13 + 4;
      }

      if (proj.technologies && proj.technologies.length > 0) {
        doc.setFont('Helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(110, 110, 125);
        doc.text(`Tech: ${proj.technologies.join(', ')}`, margin, y);
        y += 13;
      }
      y += 6;
    }
  }

  // Certifications
  if (resume.certifications && resume.certifications.length > 0) {
    renderSectionHeader('Certifications');
    for (const cert of resume.certifications) {
      checkPageBreak(25);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(25, 25, 35);
      doc.text(cert.name, margin, y);

      const certInfo = `${cert.issuer} (${cert.issueDate})`;
      const infoWidth = doc.getTextWidth(certInfo);
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 115);
      doc.text(certInfo, margin + contentWidth - infoWidth, y);
      y += 16;
    }
  }

  const cleanFilename = (resume.personalInfo.fullName || 'Resume')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_');
  doc.save(`${cleanFilename}_nivo_resume.pdf`);
}

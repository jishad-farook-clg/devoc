export interface Resource {
  slug: string;
  title: string;
  category: string;
  description: string[];
  filePath: string;
  format: string;
  topics?: string[];
  targetAudience?: string;
}

export const resources: Resource[] = [
  {
    slug: "web-development-starter-guide",
    title: "Web Development Starter Guide",
    category: "Free Guide",
    description: [
      "Learn the fundamentals of web development by building your first real webpage using **HTML**, **CSS**, and **JavaScript**—no prior programming experience required.",
      "This beginner-friendly guide explains how the web works, introduces the purpose of HTML, CSS, and JavaScript, and walks you through creating a simple interactive website from scratch.",
      "You'll learn how to organize a project, write basic code, connect multiple files, apply styling, and add interactivity with practical, hands-on examples.",
      "The guide also covers common beginner mistakes, simple coding challenges, and clear next steps to help you continue your web development journey."
    ],
    filePath: "/files/web-development-starter-guide.pdf",
    format: "PDF",
    topics: [
      "How the Web Works",
      "Intro to HTML, CSS & JS",
      "Creating Your First Interactive Webpage",
      "Common Beginner Mistakes",
      "Hands-on Practice"
    ],
    targetAudience: "Absolute Beginners, Students, and Aspiring Web Developers"
  }
];

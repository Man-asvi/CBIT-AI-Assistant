import { DocumentSource, DocumentType } from './types';

export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';

export const SIMULATED_KNOWLEDGE_BASE: DocumentSource[] = [
  {
    id: 'cbit-about',
    type: DocumentType.WEBSITE,
    title: 'About CBIT',
    url: 'https://www.cbit.ac.in/about_cbit/',
    snippet: 'Chaitanya Bharathi Institute of Technology (CBIT), established in 1979, is one of the premier Autonomous Engineering Colleges in Telangana. It is affiliated to Osmania University and accredited by NAAC with A++ Grade. CBIT offers undergraduate and postgraduate programs in engineering and management.'
  },
  {
    id: 'cbit-admissions-be',
    type: DocumentType.PDF,
    title: 'CBIT B.E. Admissions Process',
    snippet: 'Admissions to Bachelor of Engineering (B.E.) / Bachelor of Technology (B.Tech) programs are primarily based on ranks secured in the Telangana State Engineering, Agriculture & Medical Common Entrance Test (TS EAMCET). A certain percentage of seats are also available under Management Quota as per state government norms.'
  },
  {
    id: 'cbit-admissions-me',
    type: DocumentType.PDF,
    title: 'CBIT M.E./M.Tech Admissions Process',
    snippet: 'For Master of Engineering (M.E.) or Master of Technology (M.Tech) programs, admissions are based on scores from the Graduate Aptitude Test in Engineering (GATE) or the Telangana State Post Graduate Engineering Common Entrance Test (TS PGECET).'
  },
  {
    id: 'cbit-courses-cse',
    type: DocumentType.WEBSITE,
    title: 'Department of Computer Science & Engineering (CSE)',
    url: 'https://www.cbit.ac.in/cse_dept_home/',
    snippet: 'The CSE department at CBIT offers a B.E. in CSE, and M.Tech in CSE. It also offers B.E. programs in specialized areas like CSE (Artificial Intelligence & Machine Learning) and CSE (Internet of Things & Cyber Security including Block Chain Technology). The department boasts experienced faculty and well-equipped laboratories.'
  },
  {
    id: 'cbit-courses-it',
    type: DocumentType.WEBSITE,
    title: 'Department of Information Technology (IT)',
    url: 'https://www.cbit.ac.in/it_dept_home/',
    snippet: 'The IT department offers a B.E. in Information Technology. It focuses on providing students with a strong foundation in IT concepts, software development, and networking. The department actively encourages research and innovation.'
  },
  {
    id: 'cbit-courses-ece', // Added ECE as its own entry for clarity, previously implied in other-engg
    type: DocumentType.WEBSITE,
    title: 'Department of Electronics and Communication Engineering (ECE)',
    url: 'https://www.cbit.ac.in/ece_dept_home/', // Hypothetical URL
    snippet: 'The Department of Electronics and Communication Engineering (ECE) offers a B.E. in ECE and M.Tech programs (e.g., Communication Engineering, VLSI Design). It is known for its strong curriculum in core electronics and communication technologies.'
  },
  {
    id: 'cbit-courses-other-engg',
    type: DocumentType.WEBSITE,
    title: 'Other Engineering Departments at CBIT',
    url: 'https://www.cbit.ac.in/all-departments/', // Hypothetical URL, actual site structure may vary
    snippet: 'CBIT also offers robust Bachelor of Engineering (B.E.) programs in: \n* Electrical and Electronics Engineering (EEE) - B.E. and M.Tech (Power Systems & Power Electronics) \n* Mechanical Engineering (MECH) - B.E. and M.Tech (CAD/CAM) \n* Civil Engineering (CIVIL) - B.E. and M.Tech (Structural Engineering) \n* Chemical Engineering (CHEM) - B.E. \nAdditionally, CBIT offers a Bachelor of Technology (B.Tech) program in: \n* Biotechnology (BIOTECH) \nThese departments are equipped with modern laboratories and experienced faculty, focusing on both theoretical knowledge and practical skills.'
  },
  {
    id: 'cbit-all-departments-list',
    type: DocumentType.WEBSITE,
    title: 'Complete List of Academic Departments at CBIT',
    url: 'https://www.cbit.ac.in/departments-overview/', // Hypothetical URL
    snippet: `Chaitanya Bharathi Institute of Technology (CBIT) hosts a diverse range of academic departments and schools. The full list includes:
* Department of Civil Engineering
* Department of Mechanical Engineering
* Department of Electrical and Electronics Engineering (EEE)
* Department of Electronics and Communications Engineering (ECE)
* Department of Computer Science and Engineering (CSE)
* Department of Artificial Intelligence and Machine Learning (AI&ML)
* Department of Computer Engineering and Technology (CET)
* Department of Information Technology (IT)
* Department of Artificial Intelligence and Data Science (AI&DS)
* Department of Chemical Engineering
* Department of Biotechnology
* Department of Physics
* Department of Chemistry
* Department of Mathematics
* Department of English
* Department of MCA (Master of Computer Applications)
* School of Management Studies
* Department of Physical Education`
  },
  {
    id: 'cbit-contact',
    type: DocumentType.WEBSITE,
    title: 'CBIT Contact Information',
    url: 'https://www.cbit.ac.in/contact-us-main/',
    snippet: 'Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad, Telangana - 500075, India. The current Principal is Dr. C. V. Narasimhulu. Phone: +91-040-24193276, +91-040-24193277. Email: principal@cbit.ac.in.'
  },
  {
    id: 'cbit-placement-overview',
    type: DocumentType.WEBSITE,
    title: 'CBIT Placements Overview',
    url: 'https://www.cbit.ac.in/placements-home/',
    snippet: 'CBIT has a dedicated Training and Placement Cell that works towards providing students with excellent career opportunities. The cell organizes various training programs, workshops, and mock interviews. Many reputed companies visit the campus for recruitment drives annually. The overall placement percentage in recent years has been consistently high, often exceeding 85% across all branches.'
  },
  {
    id: 'cbit-placement-guidelines',
    type: DocumentType.PDF,
    title: 'CBIT Placement Guidelines & Process',
    snippet: `General Placement Guidelines at CBIT:
* Eligibility: Students typically require a minimum aggregate of 60% or 6.0 CGPA across all semesters with no active backlogs to be eligible for placements. Specific companies may have higher criteria.
* Registration: Eligible students must register with the Training and Placement (T&P) Cell.
* Training: The T&P Cell conducts aptitude training, soft skills development workshops, resume building sessions, and mock interviews.
* Process: The typical placement process includes: Pre-Placement Talks (PPTs) by companies, Written Tests/Online Assessments, Technical Interviews, and HR Interviews.
* Policy: CBIT often follows a 'One Student, One Offer' policy initially to ensure wider distribution of opportunities, with provisions for 'Dream Company' offers allowing students to sit for companies offering significantly higher packages or better roles even if already placed.
* Attire: Students are required to adhere to a formal dress code during placement drives.`
  },
  {
    id: 'cbit-placement-stats-examples',
    type: DocumentType.WEBSITE,
    title: 'CBIT Placement Highlights (Previous Year - Simulated Data)',
    url: 'https://www.cbit.ac.in/placements-highlights-archive/', // Hypothetical URL
    snippet: `Placement Highlights (Simulated Data for 2022-2023 Cycle):
* Overall Placement: Approximately 85-90% of eligible students placed.
* CSE & Specializations: Branches like Computer Science & Engineering (CSE), CSE (Artificial Intelligence & Machine Learning - AI&ML), CSE (Internet of Things & Cyber Security), and Information Technology (IT) consistently achieve high placement rates, often above 90-95%. For instance, in the 2022-2023 cycle, the CSE (AI&ML) branch saw around 92% placements (approx. 50 out of 55 eligible students).
* Other Engineering Branches: Core engineering branches like ECE, EEE, Mechanical, and Civil also have strong placement records.
* Salary Packages (2022-2023):
    * Highest Package Offered: ~45 LPA.
    * Average Package: ~7.5 LPA.
* Top Recruiters: Accenture, Capgemini, Cognizant, Deloitte, Infosys, Microsoft, Oracle, TCS, Wipro, Amazon, JP Morgan Chase.`
  },
  {
    id: 'cbit-placement-stats-2023-24',
    type: DocumentType.PDF,
    title: 'Year-wise Placements 2023-24 (Simulated Summary)',
    url: 'https://www.cbit.ac.in/wp-content/uploads/2024/11/Year-wise-Placements-2023-24.pdf',
    snippet: `Summary of Placements for the Academic Year 2023-24 (Simulated Data based on typical PDF content):
* Overall eligible students placed: Approximately 88%.
* Total number of companies visited: 150+
* Highest Salary Package Offered: 52 LPA.
* Average Salary Package: 8.2 LPA.
* Department-wise Placement Highlights (Number of Students Placed / Eligible Students):
    * Computer Science & Engineering (CSE - General): 175 / 190 students (approx. 92%)
    * CSE (Artificial Intelligence & Machine Learning - AI&ML): 56 / 60 students (approx. 93%)
    * Artificial Intelligence and Data Science (AI&DS): 54 / 58 students (approx. 93%)
    * CSE (Internet of Things & Cyber Security incl. BCT): 53 / 58 students (approx. 91%)
    * Information Technology (IT): 105 / 115 students (approx. 91%)
    * Electronics & Communication Engineering (ECE): 160 / 180 students (approx. 89%)
    * Electrical & Electronics Engineering (EEE): 85 / 100 students (approx. 85%)
    * Mechanical Engineering: 70 / 85 students (approx. 82%)
    * Civil Engineering: 55 / 70 students (approx. 78%)
    * Chemical Engineering: 22 / 30 students (approx. 73%)
    * Biotechnology: 18 / 25 students (approx. 72%)
* Key Recruiters for 2023-24 included: Google, Amazon, Microsoft, Salesforce, TCS, Infosys, Wipro, Capgemini, Cognizant, HCL, L&T, and various core engineering companies.
(Note: This is a summarized interpretation. The actual PDF would contain detailed company-wise and student-wise lists.)`
  },
  {
    id: 'cbit-library',
    type: DocumentType.PDF,
    title: 'CBIT Library Resources',
    snippet: 'The CBIT Central Library is a vast reservoir of knowledge, housing a large collection of textbooks, reference books, technical journals, periodicals, and digital resources. It provides a conducive environment for learning and research.'
  },
  {
    id: 'cbit-nirf-ranking',
    type: DocumentType.WEBSITE,
    title: 'CBIT NIRF Rankings Information',
    url: 'https://www.cbit.ac.in/nirf-rankings/', // Hypothetical URL
    snippet: 'Chaitanya Bharathi Institute of Technology (CBIT) has consistently been recognized by the National Institutional Ranking Framework (NIRF), an initiative by the Ministry of Education, Government of India. For the NIRF 2023 rankings, CBIT was placed in the rank-band 151-200 for Engineering. In the NIRF 2022 rankings, CBIT was in the 201-250 rank-band for Engineering. These rankings acknowledge the institute\'s efforts in parameters like teaching, learning, research, graduation outcomes, and outreach.'
  },
  {
    id: 'cbit-student-achievements',
    type: DocumentType.WEBSITE,
    title: 'CBIT Student Achievements and News',
    url: 'https://www.cbit.ac.in/news-achievements/', // Hypothetical URL
    snippet: `CBIT students continue to excel in various national and international arenas. Recent highlights include:
* A team from the CSE department won 1st place in the 'Smart India Hackathon 2023' for their innovative solution in the healthcare domain.
* Ms. Priya Sharma (EEE, 3rd Year) secured a prestigious research internship at a leading tech company in Bangalore.
* Students from the Mechanical Engineering department presented a paper on 'Advancements in Renewable Energy Systems' at the International Conference on Sustainable Technologies.
* The CBIT sports contingent brought home several medals from the Inter-University Sports Meet, including gold in Badminton (Men's).
* Several students across departments have received 'Best Paper' awards at various technical symposiums and conferences.`
  },
  {
    id: 'cbit-recent-events',
    type: DocumentType.WEBSITE,
    title: 'Recent and Upcoming Events at CBIT',
    url: 'https://www.cbit.ac.in/events/', // Hypothetical URL
    snippet: `Recent and upcoming events at CBIT (as of mid-2024, please check official site for latest):
* May 19: A Two-Week online Summer School on "Generative AI and its Applications"
* May 19: International FDP (Faculty Development Program) on Applied Deep Learning
* May 06: One Week Management Development Programme
* April 26: Expert Lecture by Vignana Anusandhana Kendra
(Note: This list is illustrative. Please refer to the official CBIT website or event calendars for complete, up-to-date details and full event titles.)`
  },
  {
    id: 'cbit-student-clubs',
    type: DocumentType.WEBSITE,
    title: 'Student Clubs and Organizations at CBIT',
    url: 'https://www.cbit.ac.in/student-life/clubs/', // Hypothetical URL
    snippet: `CBIT encourages a vibrant campus life with a variety of student-run clubs and organizations. These cater to diverse interests, including:
* Technical Clubs: Such as IEEE Student Branch, CSI (Computer Society of India) Student Chapter, Robotics Club, Coding Club, SAE (Society of Automotive Engineers) Club.
* Cultural Clubs: Including Music Club (Chords & Co.), Dance Club (Footloose), Dramatics Club (Abhinaya), Photography Club.
* Literary and Debating Clubs: Like the Orators Club and Literary Club.
* Social Service Clubs: NSS (National Service Scheme), Rotaract Club.
* Entrepreneurship Cell (E-Cell): Fostering innovation and startup culture.
* Sports Clubs: For various indoor and outdoor games.
(This is a representative list. For the most current and exhaustive list, students should refer to official CBIT student activity portals or notice boards.)`
  }
];

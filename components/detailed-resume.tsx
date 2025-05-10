"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function DetailedResume() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2 border-b border-border pb-4">
            <h1 className="text-3xl font-bold">Shaqil Mardhika Azhar</h1>
            <div className="flex flex-wrap justify-center gap-3 text-muted-foreground">
              <a
                href="mailto:mardhikazhar@gmail.com"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>mardhikazhar@gmail.com</span>
              </a>
              <a href="tel:087878181633" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>087878181633</span>
              </a>
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-muted-foreground">
              <a
                href="https://github.com/shaqil23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>github.com/shaqil23</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shakil-mardhika-azhar-785643190"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>linkedin.com/shakil-mardhika-azhar</span>
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="text-muted-foreground">
              Experience in data-driven academic projects has been gained, along with a strong foundation in various
              programming languages and technology concepts. An interest in learning and pursuing a career as a junior
              data analyst has been developed. Knowledge has been expanded through seminars and webinars to stay updated
              on the latest industry trends. Additionally, teamwork skills, especially in group projects, have been
              cultivated.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Education</h2>
            <div>
              <h3 className="font-medium">Undergraduate in Computer Science, Esa Unggul University (2022 – Present)</h3>
              <p className="text-muted-foreground">GPA: 3.70/4.0</p>
              <p className="text-muted-foreground">
                <span className="font-medium">Relevant Coursework:</span> Algorithm, Data Structure, Database Systems,
                Mobile App Development, Data Mining, Data Warehouse.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Technical Skills</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <span className="font-medium">Languages:</span> Python (Intermediate), MATLAB (Intermediate), SQL
                (Intermediate).
              </li>
              <li>
                <span className="font-medium">Data Technologies:</span> Pandas, NumPy, Matplotlib, Seaborn,
                Scikit-Learn.
              </li>
              <li>
                <span className="font-medium">Databases:</span> MySQL, MongoDB, Firebase, PostgreSQL.
              </li>
              <li>
                <span className="font-medium">Tools:</span> Jupyter Notebook, Tableau, Power BI, Excel, Git, Docker
                (Intermediate).
              </li>
              <li>
                <span className="font-medium">Methodologies:</span> ETL, Data Cleaning, Data Visualization, A/B Testing,
                Agile/Scrum.
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Projects</h2>

            {/* Project 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">ElderHub – Elderly Care Technology-Based Service</h3>
                <Badge variant="outline">Documents</Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Developed using Flutter for a cross-platform mobile application and Firebase as the primary backend.
                </li>
                <li>
                  Enables real-time elderly health monitoring, including automated medication reminders and scheduled
                  consultations with medical professionals.
                </li>
                <li>
                  Enhances accessibility with a senior-friendly interface designed through UX research and usability
                  testing.
                </li>
                <li>
                  Supports direct communication between seniors and healthcare providers through a real-time chat
                  feature powered by Firebase Firestore.
                </li>
                <li>
                  Ensures data security with Firebase Authentication and encryption to protect users' medical
                  information.
                </li>
                <li>
                  Optimized performance through Firebase Storage caching and reduced state rebuilds using efficient
                  state management.
                </li>
                <li>
                  Implements machine learning to provide personalized care recommendations based on user behavior and
                  health history.
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Alyoong Rent Car – Car Rental Information System</h3>
                <Badge variant="outline">Documents</Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Developed a web-based platform to streamline the car rental process online.</li>
                <li>
                  Improved operational efficiency by automating booking, identity verification, and fleet management.
                </li>
                <li>Reduced booking processing time with a real-time vehicle availability matching system.</li>
                <li>
                  Secured user data with encryption and multi-level authentication to protect personal information and
                  transactions.
                </li>
                <li>Enhanced navigation with an intuitive interface for a better user experience.</li>
                <li>Integrated online payment systems and GPS-based vehicle tracking for seamless service.</li>
                <li>Provided customer support through a built-in chat system for faster response times.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Bookstore – Database System for Inventory and Sales Management</h3>
                <Badge variant="outline">Documents</Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Built using a relational database system to manage information on books, publishers, employees,
                  orders, members, and transactions.
                </li>
                <li>
                  Improved operational efficiency by automating order recording, invoicing, and inventory management.
                </li>
                <li>
                  Reduced transaction processing time with real-time stock monitoring and low inventory notifications.
                </li>
                <li>Secured user data with access authentication and encryption of sensitive information.</li>
                <li>Simplified system navigation with an SQL-based interface for fast data manipulation.</li>
                <li>Integrated order tracking and transaction history features to enhance user experience.</li>
                <li>Minimized data loss risks with routine backups and automated data recovery strategies.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Movie Recommendation System Using Cosine Similarity</h3>
                <Badge variant="outline">Documents</Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Developed using Python and the scikit-learn library for data processing, with Flask as the primary
                  backend.
                </li>
                <li>
                  Utilizes the cosine similarity method to measure the similarity between movies based on features such
                  as genres, keywords, production companies, and taglines.
                </li>
                <li>
                  Processes data using the TF-IDF Vectorizer to convert movie information into numerical vectors,
                  enabling accurate similarity calculations.
                </li>
                <li>
                  The backend, implemented with Flask, includes user authentication, movie search, movie ratings, and a
                  personalized watchlist feature.
                </li>
                <li>
                  Users can add or remove movies from their watchlist and receive recommendations based on their
                  interaction history.
                </li>
                <li>
                  System optimization is achieved through batch data processing to handle large datasets efficiently.
                </li>
                <li>
                  Testing results show that the cosine similarity method is effective in providing relevant movie
                  recommendations and enhancing a more personalized viewing experience for users.
                </li>
              </ul>
            </div>

            {/* Project 5 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Mini Project: Data Mall Customer Analysis and Clustering</h3>
                <Badge variant="outline">Documents</Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Developed using Python with libraries such as Pandas, NumPy, Matplotlib, Seaborn, and Scikit-learn for
                  data analysis, visualization, and clustering.
                </li>
                <li>
                  Enables customer segmentation based on attributes like age, gender, annual income, and spending score
                  using K-Means clustering.
                </li>
                <li>
                  Enhances data preprocessing by normalizing the dataset using MinMaxScaler to ensure accurate
                  clustering results.
                </li>
                <li>
                  Supports data visualization through various plots (e.g., line plots, scatter plots) to identify
                  patterns and trends in customer behavior.
                </li>
                <li>
                  Ensures data integrity by handling missing values and dropping irrelevant attributes (e.g.,
                  CustomerID) to focus on meaningful features for clustering.
                </li>
                <li>
                  Optimizes clustering performance by determining the optimal number of clusters using the Elbow Method,
                  which helps in identifying the best K value for K-Means clustering.
                </li>
                <li>
                  Implements machine learning to group customers into distinct clusters, allowing businesses to tailor
                  marketing strategies and improve customer satisfaction based on segmented data.
                </li>
              </ul>
            </div>

            {/* Project 6 */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Mini Project: Property Sales Data Warehouse Trend Analysis</h3>
                <Badge variant="outline">Documents</Badge>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Developed using PostgreSQL for database management, Microsoft Power BI for data visualization, and
                  Visual Studio Code for development.
                </li>
                <li>
                  Processes property sales data from 2002 to 2018, covering residential and commercial properties with
                  key attributes such as sale price, year built, location, and tax codes.
                </li>
                <li>
                  Implements an Extract, Transform, Load (ETL) process to clean and integrate raw data, ensuring
                  consistency and accuracy for analysis.
                </li>
                <li>
                  Utilizes a star schema structure to optimize query performance, reducing redundancy and maintaining a
                  compact database size.
                </li>
                <li>
                  Fact and dimension tables are designed to support multi-dimensional analysis, enabling insights into
                  sales trends, pricing fluctuations, and regional performance.
                </li>
                <li>
                  Enhances accessibility with a structured Data Mart for streamlined reporting and performance
                  monitoring.
                </li>
                <li>
                  Results demonstrate improved data reliability, faster analytical processing, and comprehensive market
                  insights for strategic planning in the real estate sector.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div>
              <h3 className="font-medium">Data Analyst Freelance | Jakarta | Aug 2024 – Present</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>
                  Worked on various data analysis projects based on case studies from university, including data
                  processing, visualization, and interpretation to generate actionable insights.
                </li>
                <li>
                  Developed predictive models using machine learning techniques to analyze trends and patterns in
                  datasets.
                </li>
                <li>
                  Utilized SQL and Python for data extraction, transformation, and analysis to support data-driven
                  decision-making.
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Additional Skills</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                Strong analytical and problem-solving skills, with experience in data processing, visualization, and
                statistical analysis.
              </li>
              <li>
                Proficient in programming languages like Python, SQL, and R, with hands-on experience in data
                manipulation and machine learning.
              </li>
              <li>
                Effective team player with strong collaboration and communication skills, adaptable to new technologies
                and methodologies.
              </li>
              <li>
                Skilled in data visualization using tools like Tableau, Power BI, and Matplotlib to communicate insights
                effectively.
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

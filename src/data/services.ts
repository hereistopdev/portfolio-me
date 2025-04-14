import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "From mission-critical dashboards to consumer-facing websites, I develop high-performance web applications using React.js, Vue.js, Next.js, and TypeScript. I build data-driven platforms with GraphQL, REST APIs, and component-based architectures for modularity and maintainability. Notably, I developed a real-time aerospace data analysis dashboard using D3.js and WebSocket, while ensuring responsive and accessible designs with Material-UI, Shadcn UI, and Ant Design. I also led front-end modernization efforts, migrating legacy systems to high-performing SPAs with reduced load times and improved SEO.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I design and deliver scalable backends using Node.js, Python, Java, and Golang, often in microservice or event-driven architectures with Kafka, Celery, and RabbitMQ. I’ve built robust data ingestion and transformation pipelines that parse XML/JSON telemetry feeds into standard schemas, integrated secure OAuth 2.0 flows, and enabled real-time data syncing. My experience includes implementing ETL pipelines using Airflow, Flink, and Spark, and automating schema validation and anomaly detection in live data systems.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/dart.svg",
      "/skills/flutter.svg",
      "/skills/getx.png",
      "/skills/firebase.svg",
    ],
    shortDescription:
      "I create engaging mobile applications for your audience.",
    description:
      "I specialize in building cross-platform mobile applications using React Native, Java, and Kotlin, optimized for both iOS and Android. My experience spans from real-time messaging via Socket.io to dynamic data visualization using D3.js. I have architected mobile-first platforms that process complex telemetry and sensor data, translating raw feeds into intuitive interfaces for rapid decision-making. My mobile applications have integrated OAuth-based authentication, secure payment gateways (e.g., Stripe, PayPal), and Twilio-powered communication for end-to-end functionality and seamless user engagement.",
  },
  {
    id: 4,
    title: "Product Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I define goals, target audiences, and roadmap for success.",
    description:
      "I drive product innovation by collaborating closely with stakeholders to rapidly prototype data-rich platforms in compressed 2–3 week sprints. I’ve delivered AI-powered forecasting tools and personalization engines using GPT, BERT, and XGBoost, translating abstract requirements into deployable features. At Meta, I supported non-profit platforms like Airbnb.org by aligning cross-functional vision with reliable technical delivery, ensuring community and regulatory alignment.",
  },
  {
    id: 5,
    title: "DevOps",
    icons: [
      "/skills/docker.svg",
      "/skills/kubernetes.svg",
      "/skills/aws.svg",
      "/skills/jenkins.svg",
      "/skills/terraform.svg",
    ],
    shortDescription: "I streamline development and operations processes.",
    description:
      "I streamline development workflows by building CI/CD pipelines with GitHub Actions, Jenkins, and Docker, integrated with secure AWS/GCP environments. I’ve implemented infrastructure-as-code practices, optimized resource scaling using AWS Auto Scaling Groups, and reduced operational costs through performance profiling and cloud utilization audits. I have deployed containerized apps with Kubernetes, automated monitoring via ELK Stack, and established CI pipelines that catch schema and deployment anomalies early in the cycle.",
  },
  {
    id: 6,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I design and optimize complex data ecosystems across PostgreSQL, MongoDB, Redis, and DynamoDB. My experience includes schema refactoring for high-throughput analytics, implementing RBAC-secured query layers, and integrating NoSQL structures for flexible product feature tracking. I’ve developed and optimized data pipelines with Apache Airflow and implemented real-time sync layers across APIs and front-end clients.",
  },
];

export default services;

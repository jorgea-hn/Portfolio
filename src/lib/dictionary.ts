import { Content } from './types';

export const dictionary: Record<string, Content> = {
    es: {
        nav: {
            home: 'Inicio',
            projects: 'Proyectos',
            skills: 'Skills',
            contact: 'Contacto',
        },
        hero: {
            title: 'Hola, soy Jorge Henríquez',
            subtitle: 'Ingeniero Electrónico enfocado en Desarrollo Fullstack, Automatización y Análisis de Datos',
            description: 'Diseño y desarrollo soluciones de software fullstack utilizando Python y C# (.NET), integrando frontend moderno, arquitecturas backend escalables y automatización de procesos, aplicando principios de Clean Architecture y SOLID.',
            cta: 'Contáctame',
        },
        about: {
            title: 'Sobre Mí',
            description: 'Trabajo bajo principios de Clean Architecture, arquitectura en capas y SOLID, priorizando la claridad del código y la correcta separación de responsabilidades. Tengo experiencia diseñando APIs REST, modelando lógica de negocio y desarrollando aplicaciones orientadas a servicios. En análisis de datos utilizo Pandas, NumPy, Scikit-learn y Power BI para transformación, análisis exploratorio y visualización orientada a decisiones. Me desenvuelvo en entornos Linux (Ubuntu), Docker, y desarrollo automatizaciones con Power Automate y n8n.',
        },
        skills: {
            title: 'Skills',
            categories: [
                {
                    title: 'UX/UI',
                    skills: ['Illustrator', 'Photoshop', 'Figma', 'Canva'],
                },
                {
                    title: 'Desarrollo Web',
                    skills: ['JavaScript', 'React', 'Python', 'Django', 'Java', 'Next.js', 'Spring Boot', 'Go', 'Angular', 'Vue', 'FastAPI', 'Flask', 'C#', '.NET'],
                },
                {
                    title: 'Análisis de Datos',
                    skills: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'PowerBI', 'Excel', 'Tableau'],
                },
                {
                    title: 'Bases de Datos y Herramientas',
                    skills: ['AWS', 'Oracle', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Postman'],
                },
            ],
        },
        projects: {
            title: 'Proyectos',
            items: [
                // Proyectos Web Originales
                {
                    id: 'guardianes-bosque',
                    title: 'Guardianes del Bosque',
                    description: 'Desarrollo de un proyecto web para la adopción de árboles en Argentina, incentivando la reforestación. La plataforma permite adoptar árboles, seguir su crecimiento y aprender sobre la importancia de la conservación ambiental.',
                    techStack: ['React', 'Django', 'PostgreSQL'],
                    features: ['Adopción de árboles', 'Seguimiento de crecimiento', 'Conservación ambiental'],
                    githubUrl: 'https://github.com/No-Country/s12-20-m-python',
                    demoUrl: 'https://guardianesdelbosque.onrender.com',
                    level: 'intermediate' as const,
                },

                {
                    id: 'guarderia-infantil',
                    title: 'Pagina de guarderia infantil',
                    description: 'Proyecto de pagina web para una guarderia con el fin de mostrar y promocionar los servicios con conexion a firebase para almacenar los datos.',
                    techStack: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
                    features: ['Promoción de servicios', 'Almacenamiento en Firebase'],
                    githubUrl: 'https://github.com/jorgea-hn/PaginaGuarderia',
                    demoUrl: 'https://pagina-guarderia.vercel.app/',
                    level: 'beginner' as const,
                },
                // Proyectos de Data Originales
                {
                    id: 'reconocimiento-emociones',
                    title: 'Reconocimiento de Emociones',
                    description: 'Desarrollo de una app de escritorio que utiliza IA para reconocer emociones. La app genera un conjunto de datos que incluye la emoción predominante, su intensidad y otros indicadores relevantes, permitiendo la investigación de las emociones.',
                    techStack: ['Python', 'OpenCV', 'PowerBI', 'Pandas', 'Excel'],
                    features: ['Reconocimiento de emociones', 'Análisis de intensidad', 'Generación de datasets'],
                    githubUrl: 'https://github.com/No-Country/s14-26-ft-data-bi',
                    level: 'intermediate' as const,
                },
                {
                    id: 'analisis-constructora',
                    title: 'Análisis de Constructora',
                    description: 'Desarrollo de una web app que permite a una empresa con múltiples constructoras analizar su desempeño mediante datos históricos y un modelo predictivo de IA. Esto les permite tomar mejores decisiones, reducir costos y aumentar la satisfacción del cliente.',
                    techStack: ['Python', 'SQL', 'Streamlit', 'Pandas'],
                    features: ['Análisis predictivo', 'Reducción de costos', 'Optimización de decisiones'],
                    githubUrl: 'https://github.com/No-Country/s13-25-n-data-bi',
                    level: 'intermediate' as const,
                },
                {
                    id: 'derabona',
                    title: 'DeRabona: Análisis Predictivo de Rendimiento Deportivo',
                    description: 'Desarrollo de una web app que permite seguir una liga específica con fechas de partidos y probabilidades de victoria, empate o derrota de cada equipo, ofreciendo a los aficionados al fútbol una visión estratégica y precisa.',
                    techStack: ['Python', 'SQL', 'Streamlit', 'Pandas', 'Seaborn', 'Matplotlib', 'Numpy'],
                    features: ['Predicción de resultados', 'Análisis estadístico', 'Visualización de datos'],
                    githubUrl: 'https://github.com/marco11235813/Proyecto-Rendimiento-Deportivo-Nc',
                    level: 'advanced' as const,
                },
                {
                    id: 'diabeat',
                    title: 'Sistema de Recomendación Nutricional para Diabetes',
                    description: 'Desarrollo de un sistema de recomendación nutricional para personas con diabetes, que usa datos personalizados y machine learning para generar planes alimenticios y analizar productos, mejorando la calidad de vida de los usuarios.',
                    techStack: ['Python', 'SQL', 'Streamlit', 'Pandas', 'PowerBI', 'Rackspace'],
                    features: ['Recomendaciones personalizadas', 'Machine Learning', 'Análisis nutricional'],
                    githubUrl: 'https://github.com/No-Country-simulation/s16-19-ft-data-bi',
                    demoUrl: 'https://diabeat-healthcare.streamlit.app/',
                    level: 'advanced' as const,
                },
                // NUEVOS PROYECTOS ANALIZADOS (Backend/C#)
                {
                    id: 'admin-construct',
                    title: 'AdminConstruct - Sistema ERP de Construcción',
                    description: 'Sistema integral de gestión (ERP) para construcción. Cuenta con un motor complejo de renta de maquinaria con detección de conflictos, disponibilidad en tiempo real y cálculo automático de moras. La arquitectura separa la SPA del cliente del Panel Administrativo, unificados por una API robusta en .NET 8.',
                    techStack: ['ASP.NET Core 8', 'React', 'PostgreSQL', 'Docker', 'JWT'],
                    features: ['Lógica Compleja de Rentas', 'Control de Acceso (RBAC)', 'Reportes Automáticos PDF/Excel', 'Arquitectura Multi-interfaz'],
                    githubUrl: 'https://github.com/jorgea-hn/Riwi-AdminConstruct',
                    level: 'advanced' as const,
                },
                {
                    id: 'hospital-system',
                    title: 'Gestor Hospitalario San Vicente',
                    description: 'Sistema de gestión hospitalaria diseñado para optimizar el flujo de pacientes y citas. Resuelve el problema crítico del ausentismo mediante un sistema integrado de notificaciones automatizadas con SendGrid, asegurando la utilización eficiente de recursos.',
                    techStack: ['.NET 8', 'SendGrid API', 'In-Memory Caching', 'Domain-Driven Design'],
                    features: ['Notificaciones por Correo', 'Lógica de Agenda', 'Integración de Servicios Externos', 'Clean Architecture'],
                    githubUrl: 'https://github.com/jorgea-hn/Riwi-Project-CSharp-Hospital',
                    level: 'advanced' as const,
                },
                {
                    id: 'vet-clinic',
                    title: 'VetClinic Core',
                    description: 'Implementación backend pura de un sistema veterinario, adhiriéndose estrictamente a Clean Architecture y principios SOLID. Sirve como implementación de referencia para software empresarial desacoplado, testeable y mantenible.',
                    techStack: ['C#', 'Patrón Repositorio', 'Inyección de Dependencias', 'Clean Architecture'],
                    features: ['Separación Estricta de Capas', 'Implementación de Repositorio', 'Capa de Servicios Testeable', 'Patrón Factory'],
                    githubUrl: 'https://github.com/jorgea-hn/Riwi-VetClinic',
                    level: 'advanced' as const,
                },
            ],
        },
        footer: {
            copyright: '© 2026 Jorge Henríquez. Todos los derechos reservados.',
            role: 'Ingeniero Electrónico | Fullstack & Automatización',
        },
    },
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
        },
        hero: {
            title: 'Hi, I\'m Jorge Henriquez',
            subtitle: 'Electronic Engineer focused on Fullstack Development, Automation, and Data Analysis',
            description: 'I design and develop fullstack software solutions using Python and C# (.NET), integrating modern frontend, scalable backend architectures, and process automation, applying Clean Architecture and SOLID principles.',
            cta: 'Contact Me',
        },
        about: {
            title: 'About Me',
            description: 'I work as an Electronic Engineer focused on fullstack software development, process automation, and data analysis, combining engineering criteria with good software development practices.\n\nIn backend, I work mainly with Python and C# (.NET), designing REST APIs, modeling business logic, and building service-oriented applications under Clean Architecture, layered architecture, and SOLID principles, prioritizing system maintainability and scalability.\n\nIn frontend, I use React and Next.js to develop clear and functional interfaces, maintaining a correct separation between presentation and business logic.\n\nI have experience in data analysis, using Pandas, NumPy, and Scikit-learn for transformation and exploratory analysis, as well as Power BI for visualization and decision support.\n\nI work in Linux (Ubuntu) environments, use Docker for containerized environments, and develop automations using Power Automate and n8n, integrating systems and APIs to optimize workflows.',
        },
        skills: {
            title: 'Skills',
            categories: [
                {
                    title: 'UX/UI',
                    skills: ['Illustrator', 'Photoshop', 'Figma', 'Canva'],
                },
                {
                    title: 'Web Development',
                    skills: ['JavaScript', 'React', 'Python', 'Django', 'Java', 'Next.js', 'Spring Boot', 'Go', 'Angular', 'Vue', 'FastAPI', 'Flask', 'C#', '.NET'],
                },
                {
                    title: 'Data Analysis',
                    skills: ['Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'PowerBI', 'Excel', 'Tableau'],
                },
                {
                    title: 'Databases & Tools',
                    skills: ['AWS', 'Oracle', 'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Postman'],
                },
            ],
        },
        projects: {
            title: 'Projects',
            items: [
                // Original Web Projects
                {
                    id: 'guardianes-bosque',
                    title: 'Forest Guardians',
                    description: 'Development of a web project for tree adoption in Argentina, encouraging reforestation. The platform allows adopting trees, tracking their growth, and learning about the importance of environmental conservation.',
                    techStack: ['React', 'Django', 'PostgreSQL'],
                    features: ['Tree adoption', 'Growth tracking', 'Environmental conservation'],
                    githubUrl: 'https://github.com/No-Country/s12-20-m-python',
                    demoUrl: 'https://guardianesdelbosque.onrender.com',
                    level: 'intermediate' as const,
                },

                {
                    id: 'guarderia-infantil',
                    title: 'Daycare Website',
                    description: 'Website project for a daycare to showcase and promote services with Firebase connection for data storage.',
                    techStack: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
                    features: ['Service promotion', 'Firebase storage'],
                    githubUrl: 'https://github.com/jorgea-hn/PaginaGuarderia',
                    demoUrl: 'https://pagina-guarderia.vercel.app/',
                    level: 'beginner' as const,
                },
                // Original Data Projects
                {
                    id: 'reconocimiento-emociones',
                    title: 'Emotion Recognition',
                    description: 'Development of a desktop app that uses AI to recognize emotions. The app generates a dataset including the predominant emotion, its intensity, and other relevant indicators, enabling emotion research.',
                    techStack: ['Python', 'OpenCV', 'PowerBI', 'Pandas', 'Excel'],
                    features: ['Emotion recognition', 'Intensity analysis', 'Dataset generation'],
                    githubUrl: 'https://github.com/No-Country/s14-26-ft-data-bi',
                    level: 'intermediate' as const,
                },
                {
                    id: 'analisis-constructora',
                    title: 'Construction Company Analysis',
                    description: 'Development of a web app that allows a company with multiple construction firms to analyze their performance through historical data and an AI predictive model. This enables better decision-making, cost reduction, and increased customer satisfaction.',
                    techStack: ['Python', 'SQL', 'Streamlit', 'Pandas'],
                    features: ['Predictive analysis', 'Cost reduction', 'Decision optimization'],
                    githubUrl: 'https://github.com/No-Country/s13-25-n-data-bi',
                    level: 'intermediate' as const,
                },
                {
                    id: 'derabona',
                    title: 'DeRabona: Sports Performance Predictive Analysis',
                    description: 'Development of a web app that allows following a specific league with match dates and probabilities of victory, draw, or defeat for each team, offering football fans a strategic and precise vision.',
                    techStack: ['Python', 'SQL', 'Streamlit', 'Pandas', 'Seaborn', 'Matplotlib', 'Numpy'],
                    features: ['Result prediction', 'Statistical analysis', 'Data visualization'],
                    githubUrl: 'https://github.com/marco11235813/Proyecto-Rendimiento-Deportivo-Nc',
                    level: 'advanced' as const,
                },
                {
                    id: 'diabeat',
                    title: 'Nutritional Recommendation System for Diabetes',
                    description: 'Development of a nutritional recommendation system for people with diabetes, using personalized data and machine learning to generate meal plans and analyze products, improving users\' quality of life.',
                    techStack: ['Python', 'SQL', 'Streamlit', 'Pandas', 'PowerBI', 'Rackspace'],
                    features: ['Personalized recommendations', 'Machine Learning', 'Nutritional analysis'],
                    githubUrl: 'https://github.com/No-Country-simulation/s16-19-ft-data-bi',
                    demoUrl: 'https://diabeat-healthcare.streamlit.app/',
                    level: 'advanced' as const,
                },
                // NEW ANALYZED PROJECTS (Backend/C#)
                {
                    id: 'admin-construct',
                    title: 'AdminConstruct - Construction ERP System',
                    description: 'Comprehensive management system (ERP) for construction. Features a complex machinery rental engine with conflict detection, real-time availability, and automatic penalty calculation. The architecture separates the client SPA from the Admin Panel, unified by a robust .NET 8 API.',
                    techStack: ['ASP.NET Core 8', 'React', 'PostgreSQL', 'Docker', 'JWT'],
                    features: ['Complex Rental Logic', 'Access Control (RBAC)', 'Automated PDF/Excel Reports', 'Multi-interface Architecture'],
                    githubUrl: 'https://github.com/jorgea-hn/Riwi-AdminConstruct',
                    level: 'advanced' as const,
                },
                {
                    id: 'hospital-system',
                    title: 'San Vicente Hospital Manager',
                    description: 'Hospital management system designed to optimize patient flow and appointment scheduling. Solves the critical issue of patient absenteeism through an integrated automated notification system using SendGrid, ensuring efficient resource utilization.',
                    techStack: ['.NET 8', 'SendGrid API', 'In-Memory Caching', 'Domain-Driven Design'],
                    features: ['Email Notifications', 'Scheduling Logic', 'External Service Integration', 'Clean Architecture'],
                    githubUrl: 'https://github.com/jorgea-hn/Riwi-Project-CSharp-Hospital',
                    level: 'advanced' as const,
                },
                {
                    id: 'vet-clinic',
                    title: 'VetClinic Core',
                    description: 'Pure backend implementation of a veterinary system, strictly adhering to Clean Architecture and SOLID principles. Serves as a reference implementation for decoupled, testable, and maintainable enterprise software.',
                    techStack: ['C#', 'Repository Pattern', 'Dependency Injection', 'Clean Architecture'],
                    features: ['Strict Layer Separation', 'Repository Implementation', 'Testable Service Layer', 'Factory Pattern'],
                    githubUrl: 'https://github.com/jorgea-hn/Riwi-VetClinic',
                    level: 'advanced' as const,
                },
            ],
        },
        footer: {
            copyright: '© 2026 Jorge Henríquez. All rights reserved.',
            role: 'Electronic Engineer | Fullstack & Automation',
        },
    },
};

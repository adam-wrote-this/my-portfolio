import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  ArrowRight,
  Code,
  Palette,
  Zap,
  Github
} from 'lucide-react'
import Image from 'next/image'

export default function Showcase() {
  const projects = [
    {
      title: 'E-commerce Website',
      description:
        'Build a fully functional e-commerce website for a mock e-commerce platform',
      image: 'product-grid-section.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/e-commerce-website',
      demo: 'https://e-commerce-website-lyart-six.vercel.app/'
    },
    {
      title: 'Footer',
      description:
        'Build a multi-column footer featuring navigation links for the website, social media channels, and newsletter signup section',
      image: 'footer.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/footer',
      demo: 'https://footer-rho-seven.vercel.app/'
    },
    {
      title: 'Product Grid Section',
      description:
        'Build a responsive and modular section to display specified product listings',
      image: 'product-grid-section.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/product-grid-section',
      demo: 'https://product-grid-section-three.vercel.app/'
    },
    {
      title: 'Product Reviews',
      description:
        'Build a responsive product reviews dialog that displays a summary of reviews with sorting and pagination',
      image: '/product-reviews.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/product-reviews',
      demo: 'https://product-reviews-jade.vercel.app/'
    },
    {
      title: 'Product Details Section',
      description:
        'Build a responsive and dynamic product details section for displaying product information',
      image: '/product-details-section.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/product-details-section',
      demo: 'https://product-details-section-lyart.vercel.app/'
    },
    {
      title: 'Navbar (E-commerce)',
      description:
        'Build a minimal, responsive navigation bar seen on typical e-commerce websites',
      image: '/navbar-e-commerce.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/e-commerce-navigation-bar',
      demo: 'https://e-commerce-navigation-bar.vercel.app/'
    },
    {
      title: 'Cookie Consent Banner',
      description:
        'Build a responsive cookie banner and preferences dialog backed by a cookie consent management system.',
      image: '/cookie-consent.webp',
      tags: ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/cookie-consent',
      demo: 'https://cookie-consent-one.vercel.app/'
    },
    {
      title: 'Button Component',
      description:
        'Build a button component capable of showing different states, sizes and icon configurations.',
      image: '/button-component.webp',
      tags: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/button-component',
      demo: 'https://adam-wrote-this.github.io/button-component/'
    },
    {
      title: 'Profile Card Component',
      description:
        "Build a simple profile card featuring a user's basic information and links to their social media profiles.",
      image: '/profile-card.webp',
      tags: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/profile-card',
      demo: 'https://adam-wrote-this.github.io/profile-card/'
    },
    {
      title: 'Blog Card Component',
      description:
        'Build a simple blog card displaying details of a blog article.',
      image: '/blog-card.webp',
      tags: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/blog-card',
      demo: 'https://adam-wrote-this.github.io/blog-card/'
    },
    {
      title: 'Testimonial Card Component',
      description:
        'Build a simple user testimonial card with key testimonial elements.',
      image: '/testimonial-card.webp',
      tags: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS'],
      github: 'https://github.com/adam-wrote-this/testimonial-card',
      demo: 'https://adam-wrote-this.github.io/testimonial-card/'
    }
  ]

  const skills = [
    {
      name: 'Frontend',
      icon: Code,
      items: [
        'React',
        'Next.js',
        'ES6',
        'TypeScript',
        'Tailwind CSS',
        'Vue.js',
        'Angular'
      ]
    },
    {
      name: 'Backend',
      icon: Zap,
      items: [
        'Express',
        'Nest',
        'Spring Boot',
        'MySQL',
        'MongoDB',
        'Restful APIs',
        'GraphQL'
      ]
    },
    {
      name: 'Design',
      icon: Palette,
      items: ['Figma', 'UI/UX', 'Responsive Design']
    }
  ]

  return (
    <div className='min-h-screen bg-background flex flex-col items-center'>
      {/* Navigation */}
      <div className='w-full h-12 flex justify-center sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <nav className='2xl:w-[960px] 2xl:max-w-[960px] xl:w-[960px] xl:max-w-[960px] lg:w-[960px] lg:max-w-[960px] md:w-[768px] md:max-w-[768px] sm:w-[640px] sm:max-w-[640px] xs:w-[360px] xs:max-w-[360px] h-12 md:px-4 flex items-between justify-center '>
          <div className='mr-4 md:flex'>
            <a className='mr-6 flex items-center space-x-2' href='/'>
              <span className='font-bold sm:inline-block'>Portfolio</span>
            </a>
            <nav className='flex items-center space-x-6 text-sm font-medium'>
              <a
                href='#about'
                className='transition-colors hover:text-foreground/80'
              >
                About
              </a>
              <a
                href='#projects'
                className='transition-colors hover:text-foreground/80'
              >
                Projects
              </a>
              <a
                href='#skills'
                className='transition-colors hover:text-foreground/80'
              >
                Skills
              </a>
              <a
                href='#contact'
                className='transition-colors hover:text-foreground/80'
              >
                Contact
              </a>
            </nav>
          </div>
          <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
            <div className='w-full flex-1 md:w-auto md:flex-none'>
              <a
                href='https://github.com/adam-wrote-this'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button variant='outline' size='sm'>
                  <Github className='mr-2 h-4 w-4' />
                  <span>GitHub</span>
                </Button>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className='flex flex-col justify-center max-w-[960px] md:px-4'>
        {/* Hero Section */}
        <section className='container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
          <div className='mx-auto flex flex-col items-center gap-2 text-center'>
            <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
              Hi!, I'm Adam Li
            </h1>
            <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>
              A full-stack developer passionate about creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <div className='flex gap-4 mt-6'>
              <a href='#projects'>
                <Button size='lg'>
                  View Projects
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </a>
              <a href='mailto:adam.works.for.x@gmail.com'>
                <Button variant='outline' size='lg'>
                  <Mail className='mr-2 h-4 w-4' />
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='container py-8 md:py-12 lg:py-24'>
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <h2 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl'>
              About Me
            </h2>
            <p className='max-w-[700px] text-lg text-muted-foreground'>
              I'm a passionate full-stack developer with 10+ years of experience
              creating web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions. When I'm not coding,
              you'll find me exploring new technologies.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='container py-8 md:py-12 lg:py-24'>
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <h2 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl'>
              Featured Projects
            </h2>
            <p className='max-w-[700px] text-lg text-muted-foreground'>
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>
          <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-2 mt-8'>
            {projects.map((project, index) => (
              <Card key={index} className='flex flex-col'>
                <CardHeader className='pb-4'>
                  <div className='aspect-video overflow-hidden rounded-lg'>
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      width={300}
                      height={200}
                      className='object-cover w-full h-full'
                    />
                  </div>
                </CardHeader>
                <CardContent className='flex-1 flex flex-col'>
                  <CardTitle className='text-xl mb-2'>
                    {project.title}
                  </CardTitle>
                  <CardDescription className='flex-1 mb-4'>
                    {project.description}
                  </CardDescription>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className='flex gap-2'>
                    <Button variant='outline' size='sm' asChild>
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github className='mr-2 h-4 w-4' />
                        Code
                      </a>
                    </Button>
                    <Button size='sm' asChild>
                      <a
                        href={project.demo}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='mr-2 h-4 w-4' />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='container py-8 md:py-12 lg:py-24'>
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <h2 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl'>
              Skills & Technologies
            </h2>
            <p className='max-w-[700px] text-lg text-muted-foreground'>
              I work with a variety of technologies to bring ideas to life.
            </p>
          </div>
          <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8'>
            {skills.map((skill, index) => (
              <Card key={index}>
                <CardHeader className='text-center'>
                  <skill.icon className='mx-auto h-12 w-12 mb-2' />
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant='outline'>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='container py-8 md:py-12 lg:py-24'>
          <div className='mx-auto flex flex-col items-center gap-4 text-center'>
            <h2 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl'>
              Let's Work Together
            </h2>
            <p className='max-w-[700px] text-lg text-muted-foreground'>
              I'm always interested in new opportunities and exciting projects.
              Let's connect!
            </p>
            <div className='flex gap-4 mt-6'>
              <Button size='lg' asChild>
                <a
                  href='mailto:adam.works.for.x@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Mail className='mr-2 h-4 w-4' />
                  Email Me
                </a>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a
                  href='https://www.linkedin.com/in/jun-li-409b13b9/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='mr-2 h-4 w-4' />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='border-t py-6 md:py-0'>
          <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
            <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
              Built with Next.js and shadcn/ui. © 2025 All rights reserved.
            </p>
            <div className='flex items-center space-x-4'>
              <Button variant='ghost' size='sm' asChild>
                <a
                  href='https://github.com/adam-wrote-this'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-4 w-4' />
                </a>
              </Button>
              <Button variant='ghost' size='sm' asChild>
                <a
                  href='https://www.linkedin.com/in/jun-li-409b13b9/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='h-4 w-4' />
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

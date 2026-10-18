/**
 * All landing-page content sourced from "Thermosync - Company Profile".
 * Items marked PLACEHOLDER are approximations — edit freely.
 */

export const company = {
  name: 'Thermosync',
  legalName: 'Thermosync JMK Private Limited',
  tagline: 'Power & Cooling Services For Critical Spaces',
  about: [
    'Thermosync JMK Pvt. Ltd. is an engineering solutions company specializing in critical power, precision cooling, data center infrastructure, and HVAC solutions. We provide end-to-end solutions covering system design, supply, installation, commissioning, and after-sales support.',
    'Our focus is to deliver reliable, energy-efficient, and application-oriented solutions for mission-critical environments, helping customers achieve high availability, operational efficiency, and business continuity.'
  ],
  whatWeDo: [
    'Thermosync is your trusted end-to-end solution provider. We are a customer-centric organization committed to delivering exceptional services and customized solutions tailored to meet your specific requirements.',
    'Your comfort, safety, and business continuity are our top priorities. Unlike organizations that focus on a limited range of brands, we offer multi-brand solutions and services, giving you greater flexibility and access to the right products, technologies, and expertise whenever you need them.',
    'At Thermosync, we don\u2019t just provide solutions\u2014we build long-term partnerships.'
  ]
}

export const coreBusiness = [
  {
    title: 'Critical Power Solutions',
    items: ['UPS Systems', 'STS', 'Power Distribution', 'Batteries', 'Power Quality Solutions', 'Lithium-Ion Solutions'],
    icon: 'zap'
  },
  {
    title: 'Data Center Cooling',
    items: ['PAC Solutions', 'PAHU Solutions', 'Chiller-Based Systems', 'Cold Aisle Containment', 'Hot Aisle Containment'],
    icon: 'snowflake'
  },
  {
    title: 'Data Center Infrastructure',
    items: ['Server Racks', 'Electrical Infrastructure', 'Monitoring', 'Containment'],
    icon: 'server'
  },
  {
    title: 'HVAC Solutions',
    items: ['VRF / VRV', 'Ductable Solutions', 'Chiller-Based Solutions', 'Distribution & Control Systems'],
    icon: 'wind'
  },
  {
    title: 'AMC & After-Sales Services',
    items: ['Modernization & Retrofit', 'AMC', 'Health Checks', 'Preventive Maintenance', 'Breakdown Support'],
    icon: 'wrench'
  }
]

export const whyUs = [
  {
    title: 'OEM-Backed Solutions',
    body: 'Genuine, reliable solutions supported by leading OEMs to ensure quality, compatibility, and long-term performance.'
  },
  {
    title: 'Experienced Engineering Team',
    body: 'Skilled professionals delivering reliable, technically sound, and customized solutions for every project.'
  },
  {
    title: 'End-to-End Project Execution',
    body: 'Complete project management from planning and supply to installation, commissioning, and final handover.'
  },
  {
    title: 'Mission-Critical Application Expertise',
    body: 'Specialized solutions designed to ensure reliability, continuity, and uninterrupted performance for critical operations.'
  },
  {
    title: 'Energy-Efficient Solutions',
    body: 'Smart, sustainable solutions designed to reduce energy consumption, lower operating costs, and improve overall system efficiency.'
  },
  {
    title: 'Strong After-Sales Support',
    body: 'Reliable, prompt, and responsive service to ensure smooth operation, minimal downtime, and long-term system performance.'
  }
]

export const capabilities = [
  'Consultation',
  'Site Survey',
  'Solution Working',
  'Design',
  'Supply',
  'Installation',
  'Testing & Comm.',
  'AMC Support'
]

export const industries = [
  'Data Centers',
  'IT & ITeS',
  'Banking & Financial Services',
  'Service & Hospitality',
  'Healthcare',
  'Manufacturing',
  'Warehousing & Logistics',
  'Commercial Buildings',
  'Solar Industries',
  'Education & Research'
]

export const partners = [
  { name: 'Schneider Electric', logo: '/partners/schneider.png' },
  { name: 'Bluebox by Swegon', logo: '/partners/swegon.png' },
  { name: 'Socomec Innovative Power', logo: '/partners/socomec.png' },
  { name: 'Fuji Electric', logo: '/partners/fuji.png' },
  { name: 'Hisense HVAC Solutions', logo: '/partners/hisense.png' }
]

export const projects = [
  { customer: 'KF Instruments Pvt Ltd', category: 'Critical Power Solutions', capacity: '2 Nos 500 kVA', application: 'Manufacturing Machines', location: 'Bawal, Haryana' },
  { customer: 'Allengers Medical Systems Limited', category: 'Critical Power Solutions', capacity: '2 Nos 200 kVA', application: 'Medical Equipment', location: 'Multiple' },
  { customer: 'Innovative Resins Private Limited', category: 'HVAC Solution', capacity: 'Ductable VRF', application: 'Office Area', location: 'Gurugram, Haryana' },
  { customer: 'Punjab Bevel Gears Ltd', category: 'HVAC Solution', capacity: 'Ductable VRF', application: 'Machines Area', location: 'Multiple' },
  { customer: 'Eros Group', category: 'Critical Power Solutions', capacity: '30 kVA, 40 kVA', application: 'Office Area', location: 'Multiple' },
  { customer: 'Oriana Power Limited', category: 'Critical Power Solutions', capacity: '1 kVA to 40 kVA', application: 'Solar Application', location: 'Multiple' },
  { customer: 'Parasons Nutritionals Solutions Limited', category: 'Critical Power Solutions', capacity: '800 kVA', application: 'Manufacturing Machines', location: 'Bhiwadi, Rajasthan' }
]

export const supportNetwork = [
  'Sales & Application Engineering',
  'Project Management',
  'Installation Team',
  'Commissioning Engineers',
  'Service Engineers',
  'On-Site Support',
  'Spare Parts',
  'Preventive & Breakdown Maintenance'
]

export const services = coreBusiness.map(b => b.title)

export const address = 'Office No 112, Block C, Ground Floor, Sushant Shopping Arcade, Sushant Lok 1, Gurugram, Haryana 122009'

export const contacts = [
  { name: 'Neeraj Saini', phones: ['+91 98731 43974', '+91 8930808787'], email: 'neeraj@thermosync.in', role: 'PLACEHOLDER — add role/title' },
  { name: 'Manish Upadhyaya', phones: ['+91 97174 45763'], email: 'manish@thermosync.in', role: 'PLACEHOLDER — add role/title' }
]

export const stats = [
  { value: '7+', label: 'Major Projects Delivered' },
  { value: '5', label: 'Technology Partners' },
  { value: '10+', label: 'Industries Served' },
  { value: '24/7', label: 'Support Network' }
]

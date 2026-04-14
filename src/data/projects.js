// Dynamically import all project images from src/assets/projects
const projectImages = import.meta.glob('../assets/projects/*.{webp,png,jpg,jpeg}', { eager: true });

export const projectsData = [
  { id: 1, title: "3kW Residential", location: "Chennai-koyambedu", description: "3kW On-Grid System with Mono PERC panels and high-efficiency inverter." },
  { id: 2, title: "5kW Residential", location: "Chennai-Perungalathur", description: "5kW Off-Grid Setup for reliable power backup and energy independence." },
  { id: 3, title: "5kW Residential", location: "Chennai-Koyambedu", description: "5kW Commercial On-Grid system reducing monthly bills by 85%." },
  { id: 4, title: "3kW Residential", location: "Shenkottai", description: "3kW high-efficiency residential solar installation with net-metering." },
  { id: 5, title: "5kW Residential", location: "Madurai", description: "5kW premium home solar solution for complete energy independence." },
  { id: 6, title: "3kW Residential", location: "Elayirampannai", description: "Sustainable 3kW power for modern households with smart monitoring." },
  { id: 7, title: "5kW Residential", location: "Tuticorin", description: "High-yield 5kW residential setup optimized for performance." },
  { id: 8, title: "3kW Residential", location: "Sattur", description: "Reliable 3kW solar rooftop solution for residential users." },
  { id: 9, title: "5kW Residential", location: "V Pudhur", description: "Premium 5kW solar grid with high-efficiency solar modules." },
  { id: 10, title: "3kW Residential", location: "Kovilpatti", description: "Compact 3kW home solar system with fast ROI." },
  { id: 11, title: "5kW Residential", location: "Kovilpatti", description: "Heavy-duty 5kW residential solar for larger house loads." },
  { id: 12, title: "3kW Residential", location: "Kovilpatti", description: "3kW salt-mist resistant residential solar setup." },
  { id: 13, title: "5kW Residential", location: "Kadalkudi", description: "Consistent 5kW solar energy for rural households." },
  { id: 14, title: "3kW Residential", location: "Lingampatti", description: "High-performance 3kW home solar panels with warranty." },
  { id: 15, title: "5kW Residential", location: "Virudhunagar", description: "Traditional home meets modern energy with 5kW solar." },
  { id: 16, title: "3kW Residential", location: "Kovilpatti", description: "3kW eco-friendly power solution for urban residences." },
  { id: 17, title: "5kW Residential", location: "Kanjampatti", description: "Reliable 5kW power backup for large residential villas." },
  { id: 18, title: "3kW Residential", location: "Kovilpatti", description: "Smart 3kW solar installation for small family needs." },
  { id: 19, title: "5kW Residential", location: "Kovilpatti", description: "High-efficiency 5kW panels with premium inverter setup." },
  { id: 20, title: "3kW Residential", location: "Sivakasi", description: "3kW off-grid masterclass for hill station homes." },
  { id: 21, title: "5kW Residential", location: "New Appaneri", description: "Industrial-grade residential 5kW setup for high durability." },
  { id: 22, title: "3kW Residential", location: "New Appaneri", description: "Optimized 3kW residential solar with maximum solar harvest." },
  { id: 23, title: "5kW Residential", location: "Kovilpatti", description: "Eco-smart 5kW residential setup for bill-free living." },
  { id: 24, title: "3kW Residential", location: "Kovilpatti", description: "Reliable energy for village homes with 3kW solar." },
  { id: 25, title: "5kW Residential", location: "Kovilpatti", description: "High-power 5kW solar solution for multi-floor residences." },
  { id: 26, title: "3kW Residential", location: "Kovilpatti", description: "3kW sustainable energy for modern domestic requirements." },
  { id: 27, title: "5kW Residential", location: "Mettamalai", description: "Coastal-ready 5kW residential solar installation." },
  { id: 28, title: "3kW Residential", location: "Mukkuttumalai", description: "Space-optimized 3kW rooftop solar for urban homes." },
  { id: 29, title: "5kW Residential", location: "Kayathar", description: "Powerful 5kW solar grid for tech-enabled households." },
  { id: 30, title: "3kW Residential", location: "Kalugumalai", description: "High-yield 3kW residential setup for energy efficiency." },
  { id: 31, title: "5kW Residential", location: "Kilambakkam, Chennai", description: "Durable 5kW solar setup for reliable daily power." },
  { id: 32, title: "3kW Residential", location: "Kovilpatti", description: "Academic family choice: 3kW clean solar energy." },
  { id: 33, title: "5kW Residential", location: "Kovilpatti", description: "Robust 5kW solar for heritage residential architecture." },
  { id: 34, title: "3kW Residential", location: "Chennai", description: "Cost-effective 3kW solar for government official residences." },
  { id: 35, title: "5kW Residential", location: "Kovilpatti", description: "Blessed with sun: 5kW residential solar installation." },
  { id: 36, title: "3kW Residential", location: "Kovilpatti", description: "Eco-trail 3kW residential solar for green living." },
  { id: 37, title: "5kW Residential", location: "Kovilpatti", description: "Harnessing wind and sun: 5kW premium residential solar." },
  { id: 38, title: "3kW Residential", location: "Kovilpatti", description: "Smart power for riverside homes with 3kW solar." },
  { id: 39, title: "5kW Residential", location: "Servaikaranpatti", description: "Premium 5kW home setup for the local Kovilpatti community." },
  { id: 40, title: "3kW Residential", location: "Villiseri", description: "Sustainable 3kW domestic energy for better future." },
  { id: 41, title: "5kW Residential", location: "Kovilpatti", description: "Educational hub special: 5kW high-performance solar." },
  { id: 42, title: "3kW Residential", location: "Virugambakkam, Chennai", description: "Efficient 3kW residential solar grid for every home." }
].map(project => ({
  ...project,
  // Automatically link project-1.webp etc by matching the ID
  image: projectImages[`../assets/projects/project-${project.id}.webp`]?.default || 
         projectImages[`../assets/projects/project-${project.id}.png`]?.default || 
         projectImages[`../assets/projects/project-${project.id}.jpg`]?.default || 
         'https://images.unsplash.com/photo-1509391366360-fe5bb6521e77?auto=format&fit=crop&q=80&w=800'
}));

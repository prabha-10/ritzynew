import { ServiceContent, ProductContent, PortfolioContent, ServiceSection, Brand } from '../types';

// --- New Structure Fetchers ---

export async function getNewServices(): Promise<ServiceSection[]> {
    const services: ServiceSection[] = [];
    const modules = import.meta.glob('../content/new-structure/services/*.json');
    for (const path in modules) {
        const module = await modules[path]() as { default: ServiceSection };
        services.push(module.default);
    }

    // Strict Order Mapping
    // Strict Order Mapping
    const order = [
        'home-automation',
        'commercial',
        'home-theater',
        'living-room',
        'multi-room-av',
        'security',
        'controllers'
    ];

    return services
        .filter(service => order.includes(service.id))
        .sort((a, b) => {
            return order.indexOf(a.id) - order.indexOf(b.id);
        });
}

export async function getBrands(): Promise<Brand[]> {
    const brands: Brand[] = [];
    const modules = import.meta.glob('../content/new-structure/brands/*.json');
    for (const path in modules) {
        const module = await modules[path]() as { default: Brand };
        brands.push(module.default);
    }
    return brands;
}

export async function getServiceSectionBySlug(slug: string): Promise<ServiceSection | null> {
    try {
        const service = await import(`../content/new-structure/services/${slug}.json`);
        return service.default;
    } catch (e) {
        console.error(`Error loading service section ${slug}:`, e);
        return null;
    }
}

// --- End New Structure Fetchers ---

// Save service to localStorage for live updates
export function saveService(service: ServiceContent): void {
    const services = JSON.parse(localStorage.getItem('services') || '{}');
    services[service.slug] = service;
    localStorage.setItem('services', JSON.stringify(services));
}

// Load all services from localStorage first, then JSON files
export async function getServices(): Promise<ServiceContent[]> {
    const services: ServiceContent[] = [];

    try {
        const serviceModules = import.meta.glob('../content/services/*.json');
        for (const path in serviceModules) {
            const module = await serviceModules[path]() as { default: ServiceContent };
            services.push(module.default);
        }
    } catch (error) {
        console.error('Error loading services:', error);
    }

    // Override with localStorage data if exists
    const savedServices = JSON.parse(localStorage.getItem('services') || '{}');
    return services.map(service => savedServices[service.slug] || service);
}

// Load single service by slug - check localStorage first
export async function getServiceBySlug(slug: string): Promise<ServiceContent | null> {
    // Check localStorage first
    const savedServices = JSON.parse(localStorage.getItem('services') || '{}');
    if (savedServices[slug]) {
        return savedServices[slug];
    }

    // Fall back to JSON file
    try {
        const service = await import(`../content/services/${slug}.json`);
        return service.default;
    } catch (error) {
        console.error(`Error loading service ${slug}:`, error);
        return null;
    }
}

// Load all products from JSON files
export async function getProducts(): Promise<ProductContent[]> {
    const products: ProductContent[] = [];

    try {
        const productModules = import.meta.glob('../content/products/*.json');
        for (const path in productModules) {
            const module = await productModules[path]() as { default: ProductContent };
            products.push(module.default);
        }
    } catch (error) {
        console.error('Error loading products:', error);
    }

    return products;
}

// Load single product by slug
export async function getProductBySlug(slug: string): Promise<ProductContent | null> {
    try {
        const product = await import(`../content/products/${slug}.json`);
        return product.default;
    } catch (error) {
        console.error(`Error loading product ${slug}:`, error);
        return null;
    }
}

// Load all portfolio projects from JSON files
export async function getProjects(): Promise<PortfolioContent[]> {
    const projects: PortfolioContent[] = [];

    try {
        const projectModules = import.meta.glob('../content/portfolio/*.json');
        for (const path in projectModules) {
            const module = await projectModules[path]() as { default: PortfolioContent };
            projects.push(module.default);
        }
    } catch (error) {
        console.error('Error loading portfolio projects:', error);
    }

    return projects;
}

// Load single project by slug
export async function getProjectBySlug(slug: string): Promise<PortfolioContent | null> {
    try {
        const project = await import(`../content/portfolio/${slug}.json`);
        return project.default;
    } catch (error) {
        console.error(`Error loading project ${slug}:`, error);
        return null;
    }
}

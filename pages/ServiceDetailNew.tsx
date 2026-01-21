import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ServiceHero } from '../components/service/ServiceHero';
import { EducationalSection } from '../components/service/EducationalSection';
import { StickyScrollSection } from '../components/ui/StickyScrollSection';
import { FAQAccordion } from '../components/service/FAQAccordion';
import { BrandShowcase } from '../components/service/BrandShowcase';
import { ServiceCTA } from '../components/service/ServiceCTA';

// Extended service type for the new page structure
interface ExtendedServiceSection {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: string;
    seo?: {
        pageTitle: string;
        metaDescription: string;
    };
    hero?: {
        headline: string;
        tagline: string;
        description: string;
        ctaText: string;
        backgroundImage: string;
    };
    educational?: {
        what: { title: string; content: string };
        why: { title: string; intro: string; points: { title: string; description: string }[] };
        how: { title: string; intro: string; steps: { step: number; title: string; description: string }[] };
    };
    capabilities?: {
        id: string;
        title: string;
        subtitle: string;
        description: string;
        features: { title: string; description: string }[];
        icon: string;
        image: string;
    }[];
    brandShowcase?: {
        category: string;
        brands: string[];
    }[];
    faq?: {
        question: string;
        answer: string;
    }[];
    cta?: {
        headline: string;
        description: string;
        buttonText: string;
    };
}

export const ServiceDetailNew: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [service, setService] = useState<ExtendedServiceSection | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            if (!id) return;
            setLoading(true);
            try {
                // Dynamically import the service JSON
                const modules = import.meta.glob('../content/new-structure/services/*.json');
                const path = `../content/new-structure/services/${id}.json`;

                if (modules[path]) {
                    const module = await modules[path]() as { default: ExtendedServiceSection };
                    setService(module.default);
                } else {
                    setService(null);
                }
            } catch (error) {
                console.error('Failed to load service data', error);
                setService(null);
            } finally {
                setLoading(false);
            }
        }
        loadData();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7]">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
            </div>
        );
    }

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // Fallback values for services that don't have the extended content yet
    const hero = service.hero || {
        headline: service.title,
        tagline: 'Premium Solutions',
        description: service.description,
        ctaText: 'Get Started',
        backgroundImage: service.image,
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <ServiceHero
                headline={hero.headline}
                tagline={hero.tagline}
                description={hero.description}
                ctaText={hero.ctaText}
                backgroundImage={hero.backgroundImage}
            />

            {/* Educational Section (What, Why, How) */}
            {service.educational && (
                <EducationalSection
                    what={service.educational.what}
                    why={service.educational.why}
                    how={service.educational.how}
                />
            )}

            {/* Capabilities Section (Sticky Scroll) */}
            {service.capabilities && service.capabilities.length > 0 && (
                <StickyScrollSection
                    items={service.capabilities}
                    title="Our Automation Capabilities"
                    description="We curate the world's finest technology to deliver control across five key domains."
                />
            )}

            {/* Brand Showcase */}
            {service.brandShowcase && service.brandShowcase.length > 0 && (
                <BrandShowcase categories={service.brandShowcase} />
            )}

            {/* FAQ Section */}
            {service.faq && service.faq.length > 0 && (
                <FAQAccordion items={service.faq} />
            )}

            {/* CTA Section */}
            {service.cta && (
                <ServiceCTA
                    headline={service.cta.headline}
                    description={service.cta.description}
                    buttonText={service.cta.buttonText}
                />
            )}
        </div>
    );
};

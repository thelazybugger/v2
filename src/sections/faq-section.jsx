import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What exactly is an MVP, and why do I need one?',
            answer: "MVP stands for Minimum Viable Product. It is the version of your product with just enough features to satisfy early customers and provide feedback. We build MVPs so you can enter the market quickly and cost-effectively, rather than spending months building features users might not need.",
        },
        {
            question: 'Do I need to hire a separate designer and a developer?',
            answer: 'No. That is the "Old Way". At Manova Softs, we are your integrated partner. We handle everything in-house—from logo creation and UI/UX design to coding the mobile app or website.',
        },
        {
            question: 'How long does a typical project actually take?',
            answer: 'While every project is different, a standard MVP usually takes between 4 to 8 weeks. We focus on the core features first to get you to market fast. After we understand your specific requirements, we can give you a precise timeline.',
        },
        {
            question: 'What happens after the product is launched? Do you offer support?',
            answer: 'Yes, we offer ongoing support and maintenance to ensure your product continues to perform well in the market.',
        },
        {
            question: 'How much does it cost to build an MVP?',
            answer: "Careers depends on the complexity of the features. Because we focus on MVPs, our goal is to keep costs reasonable for startups.",
        },
        {
            question: 'Do you build apps for both iPhone (iOS) and Android?',
            answer: 'Yes, we provide Mobile Application development that covers both major platforms so you can reach the widest audience possible.',
        },
    ];

    return (
        <section className='mt-32'>
            <SectionTitle title="FAQ's" description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find." />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-2xl overflow-hidden border border-white/10'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>

            
        </section>
    );
}
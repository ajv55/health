'use client';
import Image from 'next/image';
import Link from 'next/link';
import Essential from '@/public/5essential.jpg';
import Fitness from '@/public/fitness.jpg';
import Health from '@/public/healthy.jpg';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import style from '@/app/style.module.css';

beforeAll(() => {
    class IntersectionObserverMock { 
        observe = jest.fn();
        unobserve = jest.fn();
        disconnect = jest.fn();
        takeRecords = jest.fn();
        constructor() {}
    }

    global.IntersectionObserver = IntersectionObserverMock as any
})


const Resource= () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return (
        <section  ref={ref}  className={`${style.background} bg-gray-100 py-12`}>
            <motion.div variants={{visible: { opacity: 1, y: 0 } }} initial={{ opacity: 0, y: -50 }} animate={mainControls} transition={{ duration: 0.5, stiffness: 100, damping: 10, delay: 0.85 }} id='resources' className="mx-w-8xl mx-auto px-4">
                <h2 className="text-7xl font-bold text-center text-indigo-600 mb-12">Explore Our Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Resource Card 1 */}
                    <motion.div data-testid='article'  whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-md hover:shadow-indigo-600 overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={Essential}
                                alt="Fitness Article"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">5 Essential Exercises for Beginners</h3>
                            <p className="text-gray-700">Discover the best exercises to kickstart your fitness journey.</p>
                            <Link className="text-blue-500 mt-4 inline-block" href="/essential">
                                Read Article
                            </Link>
                        </div>
                    </motion.div>
                    {/* Resource Card 2 */}
                    <motion.div data-testid='article'   whileHover={{ scale: 1.05 }} className="bg-white rounded-lg hover:shadow-indigo-600 shadow-md overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={Fitness}
                                alt="Nutrition Guide"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">The Ultimate Nutrition Guide</h3>
                            <p className="text-gray-700">Learn about the importance of nutrition and how to create a balanced diet.</p>
                            <Link className="text-blue-500 mt-4 inline-block" href="/fitness">
                                 Guide
                            </Link>
                        </div>
                    </motion.div>
                    {/* Resource Card 3 */}
                    <motion.div data-testid='article'   whileHover={{ scale: 1.05 }} className="bg-white hover:shadow-indigo-600  rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={Health}
                                alt="Wellness Tips"
                                style={{ objectFit: 'cover' }}
                                className="object-cover"
                                fill
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">10 Wellness Tips for a Balanced Life</h3>
                            <p className="text-gray-700">Discover practical tips for maintaining overall wellness and mental health.</p>
                            <Link className="text-blue-500 mt-4 inline-block" href="/health">
                                Read Tips
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Resource;

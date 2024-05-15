import Image from 'next/image';
import Link from 'next/link';
import Essential from '@/public/5essential.jpg';
import Fitness from '@/public/fitness.jpg';
import Health from '@/public/healthy.jpg';

const Resource= () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-7xl font-bold text-center mb-8">Explore Our Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Resource Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={Essential}
                                alt="Fitness Article"
                                layout="fill"
                                objectFit="cover"
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
                    </div>
                    {/* Resource Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={Fitness}
                                alt="Nutrition Guide"
                                layout="fill"
                                objectFit="cover"
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
                    </div>
                    {/* Resource Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={Health}
                                alt="Wellness Tips"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">10 Wellness Tips for a Balanced Life</h3>
                            <p className="text-gray-700">Discover practical tips for maintaining overall wellness and mental health.</p>
                            <Link className="text-blue-500 mt-4 inline-block" href="/health">
                                Read Tips
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resource;

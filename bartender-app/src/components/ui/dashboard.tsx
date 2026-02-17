'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Map, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Cocktail Library",
    description: "Classic recipes and original house riffs.",
    icon: BookOpen,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step techniques for the perfect pour.",
    icon: Zap,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    title: "Mixology Map",
    description: "Visual guides to glassware and flavor profiles.",
    icon: Map,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Pro Gear Shop",
    description: "Affiliate links to my recommended bar tools.",
    icon: GraduationCap,
    color: "text-brown-500",
    bg: "bg-orange-100",
  },
];

export function StudyDashboard() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full border-none shadow-md transition-shadow hover:shadow-xl">
              <CardHeader>
                <div className={`${feature.bg} ${feature.color} w-fit rounded-lg p-2 mb-2`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${feature.bg.replace('bg-', 'bg-').replace('50', '500')} w-0 transition-all duration-1000`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

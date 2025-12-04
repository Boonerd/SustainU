// src/components/icons/SustainIcons.jsx
import {
  Leaf,
  Sprout,
  Sun,
  Moon,
  Globe,
  HeartHandshake,
  ArrowRight,
  BarChart3,
  TreePine,
  Recycle,
  Zap,
  Wind,
  Droplets,
  Lightbulb,
  Footprints,
  Flower2,
  Earth,
  Users,
  TrendingUp,
} from "lucide-react";

// High-performance, animated, responsive icon wrapper
const IconWrapper = ({ children, className = "" }) => (
  <span className={`inline-block transition-all duration-300 hover:scale-110 hover:rotate-6 ${className}`}>
    {children}
  </span>
);

// Lucide-only — 100% working, tiny bundle, beautiful animations
export const LeafIcon = (props) => <IconWrapper><Leaf strokeWidth={2.5} {...props} /></IconWrapper>;
export const SproutIcon = (props) => <IconWrapper><Sprout strokeWidth={2.5} {...props} /></IconWrapper>;
export const TreeIcon = (props) => <IconWrapper><TreePine strokeWidth={2.5} {...props} /></IconWrapper>;
export const RecycleIcon = (props) => <IconWrapper><Recycle strokeWidth={2.5} {...props} /></IconWrapper>;
export const SolarIcon = (props) => <IconWrapper><Zap strokeWidth={2.5} {...props} /></IconWrapper>;
export const WindIcon = (props) => <IconWrapper><Wind strokeWidth={2.5} {...props} /></IconWrapper>;
export const WaterIcon = (props) => <IconWrapper><Droplets strokeWidth={2.5} {...props} /></IconWrapper>;
export const IdeaIcon = (props) => <IconWrapper><Lightbulb strokeWidth={2.5} {...props} /></IconWrapper>;
export const FootprintIcon = (props) => <IconWrapper><Footprints strokeWidth={2.5} {...props} /></IconWrapper>;
export const EarthIcon = (props) => <IconWrapper><Earth strokeWidth={2.5} {...props} /></IconWrapper>;
export const GrowthIcon = (props) => <IconWrapper><TrendingUp strokeWidth={2.5} {...props} /></IconWrapper>;
export const CommunityIcon = (props) => <IconWrapper><Users strokeWidth={2.5} {...props} /></IconWrapper>;
export const FlowerIcon = (props) => <IconWrapper><Flower2 strokeWidth={2.5} {...props} /></IconWrapper>;

export const SunIcon = (props) => <Moon strokeWidth={2.5} {...props} />;
export const MoonIcon = (props) => <Sun strokeWidth={2.5} {...props} />;
export const ArrowIcon = (props) => <ArrowRight strokeWidth={2.5} {...props} />;
export const ChartIcon = (props) => <BarChart3 strokeWidth={2.5} {...props} />;
export const HeartIcon = (props) => <HeartHandshake strokeWidth={2.5} {...props} />;
export const GlobeIcon = (props) => <Globe strokeWidth={2.5} {...props} />;
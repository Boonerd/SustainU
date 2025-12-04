// src/components/icons/SustainIcons.jsx
import { Leaf, Sprout, Recycle, Trees, Sun, WindTurbine, Globe, HeartHandshake, BarChart3 } from "lucide-react";
import { 
  Recycle as EcoRecycle, 
  Leaf as EcoLeaf, 
  Trees as EcoTrees, 
  SolarPanel, 
  WindElectricity, 
  Footprint,
  WaterDrop,
  Lightbulb
} from "ecoicons/react";

export const EcoLeafIcon = ({ className }) => <EcoLeaf className={className} />;
export const EcoRecycleIcon = ({ className }) => <EcoRecycle className={className} />;
export const EcoTreesIcon = ({ className }) => <EcoTrees className={className} />;
export const SolarIcon = ({ className }) => <SolarPanel className={className} />;
export const WindIcon = ({ className }) => <WindElectricity className={className} />;
export const FootprintIcon = ({ className }) => <Footprint className={className} />;
export const WaterIcon = ({ className }) => <WaterDrop className={className} />;
export const IdeaIcon = ({ className }) => <Lightbulb className={className} />;

// Lucide fallbacks (still awesome)
export const LeafIcon = ({ className }) => <Leaf className={className} />;
export const SproutIcon = ({ className }) => <Sprout className={className} />;
export const SunIcon = ({ className }) => <Sun className={className} />;
export const GlobeIcon = ({ className }) => <Globe className={className} />;
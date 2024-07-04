import ImpactPathChart from "./impactPath";

interface CalorieImpactPathsProps {
  maintenanceCalories: number;
}

const CalorieImpactPaths: React.FC<CalorieImpactPathsProps> = ({ maintenanceCalories }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-8">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">Calorie Impact Paths</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ImpactPathChart
          title="Low Impact"
          maintenanceCalories={maintenanceCalories}
          deduction={250}
          description="A small but steady calorie reduction. Suitable for gradual weight loss and easy to maintain."
        />
        <ImpactPathChart
          title="Medium Impact"
          maintenanceCalories={maintenanceCalories}
          deduction={375}
          description="A moderate calorie reduction. Effective for more noticeable weight loss over time."
        />
        <ImpactPathChart
          title="High Impact"
          maintenanceCalories={maintenanceCalories}
          deduction={550}
          description="A significant calorie reduction. Ideal for rapid weight loss, but may be challenging to sustain."
        />
      </div>
    </div>
  );
};

export default CalorieImpactPaths;


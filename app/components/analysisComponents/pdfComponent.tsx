// components/PdfComponent.js
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const PdfComponent = () => {
  const [data, setData] = useState([]);
  const {data: session} = useSession();
  const isActive = session?.user.isActive;
  const router = useRouter();
  const breakfastLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const lunchLogs = useSelector((state: RootState) => state.log.userLunchLogs);
  const dinnerLogs = useSelector((state: RootState) => state.log.userDinnerLogs);
  const snackLogs = useSelector((state: RootState) => state.log.userMealLogs);
  const currentDate = useSelector((state: RootState) => state.weight.currentDate);
  const formattedDate = format(currentDate!, 'MMM d');


  const allLogs = [...breakfastLogs!, ...lunchLogs!, ...dinnerLogs!, ...snackLogs!];

  console.log(isActive)

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('FitGenius Summary', 14, 22);

    doc.setFontSize(12);
    doc.text(`Date: ${formattedDate}`, 14, 30);

    if (allLogs.length === 0) {
      doc.setFontSize(14);
      doc.text('No meal log for today', 14, 40);
    } else {
      const tableData = allLogs.map((item: any) => [
        item.name,
        item.calories,
        item.protein,
        item.carbs,
        item.fat,
        item.satFat ?? 0,
        item.transFat ?? 0,
        item.sodium,
        item.calcium,
        item.fiber,
      ]);

      (doc as any).autoTable({
        startY: 40,
        head: [['Name', 'Calories', 'Protein', 'Carbs', 'Fat', 'Sat Fat', 'Trans Fat', 'Sodium', 'Calcium', 'Fiber']],
        body: tableData,
        theme: 'grid',
        headStyles: {
          fillColor: [0, 81, 255],
          textColor: [255, 255, 255],
        },
        bodyStyles: {
          textColor: [0, 0, 0],
        },
        styles: {
          cellPadding: 3,
          fontSize: 10,
          valign: 'middle',
          halign: 'center',
        },
        alternateRowStyles: {
          fillColor: [240, 240, 240],
        },
      });
    }

    doc.save('FitGenius_Report.pdf');
  };

  const handleClick = () => {
    if(isActive === true) {
        generatePdf();
    } else {
        router.push('/pricing')
    }
  }


  return (
    <div className="p-2">
      <button
        onClick={handleClick} 
        className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Day Report
      </button>
    </div>
  );
};

export default PdfComponent;

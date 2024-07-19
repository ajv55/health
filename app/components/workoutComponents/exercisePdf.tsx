import { format } from 'date-fns';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import React from 'react'

export default function ExercisePdf({exerciseLog}: {exerciseLog: any}) {

    const generatePdf = () => {
        const doc = new jsPDF();
        const formattedDate = new Date().toLocaleDateString(); // Assuming you have a formatted date
      
        doc.setFontSize(18);
        doc.text('FitGenius Exercise Summary', 14, 22);
      
        doc.setFontSize(12);
        doc.text(`Date: ${formattedDate}`, 14, 30);
      
        if (exerciseLog.length === 0) {
          doc.setFontSize(14);
          doc.text('No exercise log for today', 14, 40);
        } else {
          const tableData = exerciseLog.map((item: any) => [
            item.name,
            Math.round(item.caloriesBurned),
            item.duration,
            item.sets.length,
            format(new Date(item.createdAt), 'MMMM d yyyy')
          ]);
      
          (doc as any).autoTable({
            startY: 40,
            head: [['Name', 'Calories Burned', 'Duration', 'Sets', 'Date']],
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
      
        doc.save('FitGenius_Exercise_Report.pdf');
      };
      

  return (
    <div className="p-2">
      <button 
        onClick={generatePdf}
        className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        Day Exercise Report
      </button>
    </div>
  )
}

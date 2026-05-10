import { useState } from "react";
import { MapPin, Navigation, Home, Briefcase, Check, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { showSuccess } from "@/utils/toast";

interface LocationPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (location: string) => void;
}

const LocationPicker = ({ isOpen, onClose, onSelect }: LocationPickerProps) => {
  const [step, setStep] = useState<'map' | 'details'>('map');
  const [selectedLabel, setSelectedLabel] = useState<'home' | 'work' | 'other'>('home');

  const handleConfirm = () => {
    showSuccess("تم حفظ العنوان بنجاح!");
    onSelect("حي الملقا، شارع أنس بن مالك");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-4"
        >
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="w-full max-w-2xl bg-white dark:bg-secondary rounded-t-[3rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-2xl font-black">تحديد موقع التوصيل</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {step === 'map' ? (
                <div className="relative h-[400px] md:h-[500px]">
                  {/* Simulated Map */}
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80" 
                    className="w-full h-full object-cover opacity-80"
                    alt="Map"
                  />
                  
                  {/* Zone Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-20">
                      <path d="M100,100 L300,150 L250,350 L50,300 Z" fill="#FF3838" />
                      <path d="M400,50 L600,100 L550,300 L350,250 Z" fill="#4CAF50" />
                    </svg>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="relative"
                    >
                      <MapPin className="w-12 h-12 text-primary fill-primary/20" />
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm" />
                    </motion.div>
                  </div>

                  {/* Search Bar on Map */}
                  <div className="absolute top-6 left-6 right-6">
                    <Card className="p-2 rounded-2xl shadow-xl border-none flex items-center gap-3">
                      <Search className="w-5 h-5 text-muted-foreground mr-2" />
                      <input 
                        type="text" 
                        placeholder="ابحث عن منطقة أو شارع..." 
                        className="flex-1 bg-transparent outline-none font-bold text-sm"
                      />
                      <Button size="sm" variant="secondary" className="rounded-xl gap-2">
                        <Navigation className="w-4 h-4" /> الحالي
                      </Button>
                    </Card>
                  </div>

                  {/* Zone Info Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-green-500 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <Check className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-black opacity-80">المنطقة مدعومة</p>
                          <p className="font-black">توصيل سريع خلال 25 دقيقة</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 space-y-8">
                  <div className="space-y-4">
                    <label className="text-sm font-black text-muted-foreground uppercase tracking-widest">تسمية العنوان</label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { id: 'home', label: 'المنزل', icon: Home },
                        { id: 'work', label: 'العمل', icon: Briefcase },
                        { id: 'other', label: 'أخرى', icon: MapPin },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedLabel(item.id as any)}
                          className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${
                            selectedLabel === item.id 
                            ? 'border-primary bg-primary/5 text-primary' 
                            : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <item.icon className="w-6 h-6" />
                          <span className="font-black text-sm">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-black text-muted-foreground uppercase tracking-widest">تفاصيل إضافية</label>
                    <textarea 
                      placeholder="رقم الشقة، الطابق، أو علامة مميزة..."
                      className="w-full p-6 rounded-3xl bg-secondary/50 border-none outline-none font-bold min-h-[120px] resize-none"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-8 border-t bg-gray-50/50">
              {step === 'map' ? (
                <Button 
                  onClick={() => setStep('details')}
                  className="w-full btn-primary-gradient h-16 rounded-2xl text-xl font-black"
                >
                  تأكيد الموقع
                </Button>
              ) : (
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep('map')}
                    className="h-16 px-8 rounded-2xl font-black"
                  >
                    رجوع
                  </Button>
                  <Button 
                    onClick={handleConfirm}
                    className="flex-1 btn-primary-gradient h-16 rounded-2xl text-xl font-black"
                  >
                    حفظ العنوان
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LocationPicker;
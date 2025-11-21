import ScrollVelocity from '../../../components/ui/shadcn-io/scroll-velocity/index';
const ScrollVelocityDemo = () => {
  return (
    <div>
      <div className=" flex items-center justify-center ">
      </div>
      
      <div className="py-2 flex items-center text-white justify-center">
        <ScrollVelocity
          texts={['MERN Stack Applications\u00A0\u00A0\u00A0\u00A0\u00A0Frontend Development\u00A0\u00A0\u00A0\u00A0\u00A0Authentication & User Management\u00A0\u00A0\u00A0\u00A0\u00A0', 'Responsive Web Design\u00A0\u00A0\u00A0\u00A0\u00A0Clean & Modern UI Components\u00A0\u00A0\u00A0\u00A0\u00A0Dashboard & Admin Panel\u00A0\u00A0\u00A0\u00A0\u00A0']} 
          velocity={50} 
          className="text-purple-200"
        />
      </div>
    </div>
  );
};
export default ScrollVelocityDemo;
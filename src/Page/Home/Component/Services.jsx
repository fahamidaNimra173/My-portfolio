import ScrollVelocity from '../../../components/ui/shadcn-io/scroll-velocity/index';
const ScrollVelocityDemo = () => {
    return (
        <div>
            <div className=" flex items-center justify-center ">
            </div>

            <div className="py-2 flex items-center text-white justify-center">
                <ScrollVelocity
                    texts={[
                        '⭐ MERN Stack Applications\u00A0\u00A0\u00A0\u00A0\u00A0🔹 Frontend Development\u00A0\u00A0\u00A0\u00A0\u00A0💻 Authentication & User Management\u00A0\u00A0\u00A0\u00A0\u00A0⭐ API Integration',
                        '⭐ Responsive Web Design\u00A0\u00A0\u00A0\u00A0\u00A0🔹 Clean & Modern UI Components\u00A0\u00A0\u00A0\u00A0\u00A0💻 Dashboard & Admin Panel\u00A0\u00A0\u00A0\u00A0\u00A0⭐ E-commerce Functionality'
                    ]}

                    velocity={50}
                    className="text-purple-200"
                />
            </div>
        </div>
    );
};
export default ScrollVelocityDemo;
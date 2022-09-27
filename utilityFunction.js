const ColorPicker = (title) => {
    switch(title) {
        case 'MERCURY' : {
            return "#419EBB"
        };
        case 'VENUS' : {
            return "#EDA249"
        }
        case 'EARTH' : {
            return "#6D2ED5"
        }
        case 'MARS' : {
            return "#D14C32"
        }
        case 'JUPITER' : {
            return "#D83A34"
        }
        case 'SATURN' : {
            return "#CD5120"
        }
        case 'URANUS' : {
            return "#1EC1A2"
        }
        case 'NEPTUNE' : {
            return "#2D68F0"
        }
    }
};

export default ColorPicker;

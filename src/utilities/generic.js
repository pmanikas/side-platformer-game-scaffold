const ruleOfThree = ({ xA, xB, yA }) => {
    if(xA === 0) return 0;
    return (xB / xA) * yA;
};

export { ruleOfThree };
function pyramidOfKingJoser(base, height){
    let totalBlocks = 0;
    let marble = 0;
    let lapis = 0;
    let floor = 0;
    let stone = 0;

    while(base > 2){
        totalBlocks = base * base * height;
        let innerBlocks = (base - 2) * (base - 2) * height;
        let outerBlocks = totalBlocks - innerBlocks;
        floor ++;

        if (floor % 5 === 0){
            lapis += outerBlocks;
        } else {
            marble += outerBlocks
        }
        stone += innerBlocks;
        base -= 2;
    }
    floor++;
    let gold = Math.ceil(base * base * height);
    let pyramidHeight = Math.floor(height * floor);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${pyramidHeight}`);
}
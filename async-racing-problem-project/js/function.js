async function getFunction1() {
    try {

        console.log("funcation 1 is done");
        console.log("wait function 3 is calling")
        const calling2 = await getFunction3();
        console.log("fucation 3 calling done:", calling2);

    }
    catch (error) {
        console.error("Error function calling:", error.message);
    }

}

async function getFunction2() {
    try {
        console.log("wow function 2 calling done");
        console.log("wait for function 3 calling");
        return "Success"
    }
    catch (error) {
        console.error("Eror Calling function:", error.message);
        throw error;
    }
}

async function getFunction3() {
    try {
        console.log("All functions calling done");
        const result3 = await getFunction2();
        console.log("funcation 2 is calling done:", result3);
        return "Success";
    }
    catch (error) {
        console.error("Error in all functions:", error.message);
        throw error;
    }
}

getFunction1();


















async function Frist() {
    console.log("funtion 1 is done.");
    console.log("wait for 2nd function");
    const call2 = await Second();
    }

    async function Second() {
        console.log("function 2 is done");
        console.log("Wait for 3rd function");
        const call3 = await Third();
        

    }

    function Third() {
        console.log("All function done sucessfully");
        return "Sucess";
    }
function getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}

function postData(dataBody) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    });
}
function putData(updatedData) {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    });
}

function patchData(dataElement) {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataElement)
    });
}

function deleteData() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(url, {
        method: 'DELETE'
    });
}
function addBatchElemnts(data) {
    const fragment = document.createDocumentFragment();
    for (let [key, value] of Object.entries(data)) {
        let pelem = document.createElement('p');
        pelem.textContent = JSON.stringify(value);
        fragment.appendChild(pelem);
    }
    document.body.appendChild(fragment);
}

const dataElement = { "userId": 1, "id": 1, "title": "Vivekanand's Info", "body": "Hey Its Vivekananad" };

async function run() {
    try {
        //Get Method
        const getdataResponse = await getData();
        if (!getdataResponse.ok) {
            throw new Error("Request failed");
        }
        let getdata = await getdataResponse.json();
        addBatchElemnts(getdata);
        console.log("Data Added Successfully...")

        //Post Method
        const postdataResponse = await postData(dataElement);
        if (!postdataResponse.ok) {
            throw new Error("Request failed");
        }
        let postdata = await postdataResponse.json();
        console.log("Data Posted Sucessfully...");
        console.log(postdata);

        //PUT Method
        const putdataResponse = await putData({ "userId": 1, "id": 1, "title": "Vivekanand-s-naik Info", "body": "Hey Its Vivekananad The Dominator" });
        if (!putdataResponse.ok) {
            throw new Error("Request failed getdataResponse",);
        }
        let putdata = await putdataResponse.json();
        console.log("Data Updated SUcessfully...");
        console.log(putdata);

        //PATCH method
        const patchdataResponse = await patchData({ "userId": 3 });
        if (!patchdataResponse.ok) {
            throw new Error("Request failed patchdataResponse");
        }
        let patchdata = await patchdataResponse.json();
        console.log("Partial Data Updated Sucessfully...");
        console.log(patchdata);

        //DELETE Method
        const deletedataResponse = await deleteData();
        if (!deletedataResponse.ok) {
            throw new Error("Request failed deletedataResponse");
        }
        let deletedata = await deletedataResponse.json();
        console.log("Data Deleted Sucessfully...");
        console.log(deletedataResponse.status);
    } catch (error) {
        console.log("Erorororssss : \n" + error);
    }
}
run();
import { filterData } from "../src/elo7/Jobs.svelte";

test("FilterData_ActiveAndWithLocation_OneFilteredJob", () => {
    let data = buildData(1,1,1);
    let filteredData = filterData(data);
    expect(filteredData[0]["cargo"]).toBe("Desenvolvedor 0");
    expect(filteredData[0]["ativa"]).toBe(true);
    expect(filteredData[0]["link"]).toBe("http://elo7.dev/vaga/desenvolvedor-0");
    expect(filteredData[0]["localizacao"]["bairro"]).toBe("Bairro 0");
    expect(filteredData[0]["localizacaoFinal"]).toBe("Bairro 0 - Cidade 0 - País 0");
    expect(filteredData.length).toBe(1);
});

test("FilterData_ActiveAndWithoutLocation_OneFilteredJob", () => {
    let data = buildData(1,1,0);
    let filteredData = filterData(data);
    expect(filteredData[0]["cargo"]).toBe("Desenvolvedor 0");
    expect(filteredData[0]["ativa"]).toBe(true);
    expect(filteredData[0]["link"]).toBe("http://elo7.dev/vaga/desenvolvedor-0");
    expect(filteredData[0]["localizacao"]).toBe(undefined);
    expect(filteredData[0]["localizacaoFinal"]).toBe("Remoto");
    expect(filteredData.length).toBe(1);
});

test("FilterData_Inactive_ZeroFilteredJobs", () => {
    let data = buildData(1,0,1);
    let filteredData = filterData(data);
    expect(filteredData.length).toBe(0);
});

test("FilterData_ZeroJobs_ZeroFilteredJobs", () => {
    let data = buildData(0,0,0);
    let filteredData = filterData(data);
    expect(filteredData.length).toBe(0);
});

test("FilterData_TenJobsButOnlyFiveActives_FiveFilteredJobs", () => {
    let data = buildData(10,5,10);
    let filteredData = filterData(data);
    expect(filteredData.length).toBe(5);
});

function buildData(numberOfJobs, numberOfActiveJobs, numberOfLocationFilled){
    if(numberOfJobs < numberOfActiveJobs || numberOfJobs < numberOfLocationFilled){
        throw new Error(
            "Impossible to build with parameters provided in the function buildData. The condition of" + 
            "existence is numberOfJobs >= numberOfActiveJobs and numberOfJobs >= numberOfLocationFilled"
            );
    }

    let responseJson = {"vagas": []};
    
    for (let index = 0; index < numberOfJobs; index++) {
        let job = {};
        
        job["cargo"] = "Desenvolvedor " + index.toString();
        
        if(numberOfActiveJobs > 0){
            job["ativa"] = true;
            numberOfActiveJobs--;
        }
        else{
            job["ativa"] = false;
        }

        job["link"] = "http://elo7.dev/vaga/desenvolvedor-" + index.toString();

        if(numberOfLocationFilled > 0){
            job["localizacao"] = {};
            job["localizacao"]["bairro"] = "Bairro " + index.toString();
            job["localizacao"]["cidade"] = "Cidade " + index.toString();
            job["localizacao"]["pais"] = "País " + index.toString();
            numberOfLocationFilled--;
        }

        responseJson["vagas"].push(job);
    }

    return responseJson;
}
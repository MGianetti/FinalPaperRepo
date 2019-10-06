export default class Enums {
    static SearchType = {
        NoSearch: 0,
        Car: 1,
        Service: 2,
        Item: 3,
    }

    static ClientDropdownType = {
        CPF: "CPF",
        Name: "Nome",
        Telephone: "Telefone",
        Cellphone: "Celular",
        Plate: "Car Plate"
    }

    static CarDropdownType = {
        Plate: "Placa",
        ClientName: "Nome do Cliente",
        ClientCPF: "CPF do Cliente"
    }

    static ServiceDropdownType = {
        Type: "Tipo",
        Summary: "Resumo",
    }

    static ServiceType = {
        Corrective: "corrective",
        Preventive: "preventive",
        Eletronic: "eletronic"
    }

    static ItemDropdownType = {
        Description: "Descrição",
        Code: "Código"
    }

    static BudgetDropdownType = {
        Summary: "Resumo",
        Car: "Carro",
        Client: "Cliente",
    }

    static EmployeeDropdownType = {
        CPF: "CPF",
        Name: "Nome",
        Telephone: "Telefone",
        Cellphone: "Celular",
    }

    static StockDropdownType = {
        Name: "Nome",
        Price: "Preço",
    }

    static InspectionDropdownType = {
        ID: "ID", 
        Summary: "Resumo",
        Client: "Cliente",
        Car: "Carro"
    }

    static BillingDropdownType = {
        Car: "Carro", 
        Service: "Serviço",
        Budget: "Orçamento",
        Value: "Valor",
        Date: "Data"
    }

    static ClientDropdown = [
        Enums.ClientDropdownType.CPF,
        Enums.ClientDropdownType.Name,
        Enums.ClientDropdownType.Telephone,
        Enums.ClientDropdownType.Cellphone,
        Enums.ClientDropdownType.Plate
    ]

    static CarDropdown = [
        Enums.CarDropdownType.Plate,
        Enums.CarDropdownType.ClientName,
        Enums.CarDropdownType.ClientCPF
    ]

    static ServiceDropdown = [
        Enums.ServiceDropdownType.Type,
        Enums.ServiceDropdownType.Summary,
    ]

    static ItemDropdown = [
        Enums.ItemDropdownType.Description,
        Enums.ItemDropdownType.Code
    ]

    static BudgetDropdown = [
        Enums.BudgetDropdownType.Summary,
        Enums.BudgetDropdownType.Car,
        Enums.BudgetDropdownType.Client,
    ]

    static EmployeeDropdown = [
        Enums.EmployeeDropdownType.CPF,
        Enums.EmployeeDropdownType.Name,
        Enums.EmployeeDropdownType.Telephone,
        Enums.EmployeeDropdownType.Cellphone,
    ]

    static InspectionDropdown = [
        Enums.InspectionDropdownType.ID, 
        Enums.InspectionDropdownType.Summary,
        Enums.InspectionDropdownType.Client,
        Enums.InspectionDropdownType.Car,
    ]

    static BillingDropdown = [
        Enums.BillingDropdownType.Car, 
        Enums.BillingDropdownType.Service,
        Enums.BillingDropdownType.Budget,
        Enums.BillingDropdownType.Value,
        Enums.BillingDropdownType.Date,
    ]
}
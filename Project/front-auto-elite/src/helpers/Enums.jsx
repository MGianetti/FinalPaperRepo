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
        Phone: "Telefone",
    }

    static CarDropdownType = {
        Plate: "Placa",
        Client: "Cliente",
    }

    static ServiceDropdownType = {
        Type: "Tipo",
        Name: "Nome",
    }

    static ItemDropdownType = {
        Name: "Nome",
    }

    static BudgetDropdownType = {
        Summary: "Resumo",
        Car: "Carro",
        Client: "Cliente",
    }

    static EmployeeDropdownType = {
        Name: "Nome",
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
        Enums.ClientDropdownType.Phone,
    ]

    static CarDropdown = [
        Enums.CarDropdownType.Plate,
        Enums.CarDropdownType.Client,
    ]

    static ServiceDropdown = [
        Enums.ServiceDropdownType.Type,
        Enums.ServiceDropdownType.Name,
    ]

    static ItemDropdown = [
        Enums.ItemDropdownType.Name,
    ]

    static BudgetDropdown = [
        Enums.BudgetDropdownType.Summary,
        Enums.BudgetDropdownType.Car,
        Enums.BudgetDropdownType.Client,
    ]

    static EmployeeDropdown = [
        Enums.EmployeeDropdownType.Name,
    ]

    static StockDropdown = [
        Enums.StockDropdownType.Name,
        Enums.StockDropdownType.Price,
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
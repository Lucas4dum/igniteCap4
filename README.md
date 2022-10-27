# igniteCap3

- rodar migration typeorm atualizado ["yarn typeorm migration:generate ./src/database/migrations/CreateCategories"]
- criar dados yarn typeorm migration:run 
- apagar dados yarn typeorm migration:revert
- apagar containers docker-compose down -v "caso queira apagar os registros do banco colocar -v se não é só retirar"
- criar containers docker-compose up -d
- listar containers docker ps "para os que estão rodando e -a para todos os containers"

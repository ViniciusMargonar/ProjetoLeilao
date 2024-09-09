import React from "react";
import { Card } from "primereact/card";
import style from "./Dashboard.module.css";
import { Chart } from 'primereact/chart';

const Dashboard = () => {
    const totalLeiloes = 150;
    const leiloesCriadosHoje = 5;
    const leiloesArrematados = 20;
    const totalVendas = 250000;
    const mediaVendas = 12500;
    const totalUsuarios = 300;
    const usuariosHoje = 10;
    const usuariosMes = 50;

    const leiloesData = {
        labels: ['Total', 'Leilões Hoje', 'Leilões Arrematados'],
        datasets: [{
            data: [totalLeiloes, leiloesCriadosHoje, leiloesArrematados],
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        }]
    };

    const vendasData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Total de Vendas',
                data: [200000, 220000, 250000, 240000, 260000, 270000, totalVendas],
                fill: false,
                borderColor: '#42A5F5',
                tension: 0.4
            },
            {
                label: 'Média de Vendas',
                data: [10000, 11000, 12000, 11500, 12500, 13000, mediaVendas],
                fill: false,
                borderColor: '#66BB6A',
                tension: 0.4
            }
        ]
    };

    const usuariosDiariosData = {
        labels: ['Dia -4', '-3', '-2', 'Ontem', 'Hoje'],
        datasets: [{
            label: 'Usuários Cadastrados',
            backgroundColor: '#42A5F5',
            data: [2, 5, 7, 3, usuariosHoje] // Exemplo de dados dos últimos 5 dias
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    };

    return (
        <div className={style.dashboardContainer}>
            <Card className={style.dashboardCard}>
                <h2>Informações sobre os Leilões</h2>
                <p>Total: {totalLeiloes}</p>
                <p>Leilões Criados Hoje: {leiloesCriadosHoje}</p>
                <p>Leilões Arrematados: {leiloesArrematados}</p>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>Total de Vendas</h2>
                <p>Total: R${totalVendas.toLocaleString()}</p>
                <p>Média de Vendas: R${mediaVendas.toLocaleString()}</p>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>Usuários Cadastrados</h2>
                <p>Total: {totalUsuarios}</p>
                <p>Total do Dia: {usuariosHoje}</p>
                <p>Total do Mês: {usuariosMes}</p>
            </Card>

            {/* Cards com gráficos */}
            <Card className={style.dashboardCard}>
                <h2>Gráfico de Leilões</h2>
                <div className={style.chartContainer}>
                    <Chart type="pie" data={leiloesData} options={chartOptions} className={style.chart} />
                </div>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>Gráfico de Vendas</h2>
                <div className={style.chartContainer}>
                    <Chart type="line" data={vendasData} options={chartOptions} className={style.chart} />
                </div>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>Gráfico de Usuários</h2>
                <div className={style.chartContainer}>
                    <Chart type="bar" data={usuariosDiariosData} options={chartOptions} className={style.chart} />
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;

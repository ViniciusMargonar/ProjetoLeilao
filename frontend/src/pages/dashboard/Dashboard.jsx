import React from "react";
import { Card } from "primereact/card";
import style from "./Dashboard.module.css";
import { Chart } from 'primereact/chart';
import { useTranslation } from "react-i18next";

const Dashboard = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const totalLeiloes = 150;
    const leiloesCriadosHoje = 5;
    const leiloesArrematados = 20;
    const totalVendas = 250000;
    const mediaVendas = 12500;
    const totalUsuarios = 300;
    const usuariosHoje = 10;
    const usuariosMes = 50;

    const leiloesData = {
        labels: [(t('Total')), (t('Auction Today')), (t('Finished Auctions'))],
        datasets: [{
            data: [totalLeiloes, leiloesCriadosHoje, leiloesArrematados],
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        }]
    };

    const vendasData = {
        labels: [(t('Jan')), (t('Feb')), (t('Mar')), (t('Apr')), (t('May')), (t('Jun')), (t('Jul'))],
        datasets: [
            {
                label: (t('Total Sales')),
                data: [200000, 220000, 250000, 240000, 260000, 270000, totalVendas],
                fill: false,
                borderColor: '#42A5F5',
                tension: 0.4
            },
            {
                label: (t('Average Sales')),
                data: [10000, 11000, 12000, 11500, 12500, 13000, mediaVendas],
                fill: false,
                borderColor: '#66BB6A',
                tension: 0.4
            }
        ]
    };

    const usuariosDiariosData = {
        labels: [(t('Day')), '-3', '-2', (t('Yesterday')), (t('Today'))],
        datasets: [{
            label: (t('Registered Users')),
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
                <h2>{t('Auction Information')}</h2>
                <p>{t('Total')}: {totalLeiloes}</p>
                <p>{t('Auction Created Today')}: {leiloesCriadosHoje}</p>
                <p>{t('Auction Won')}: {leiloesArrematados}</p>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>{t('Total Sales')}</h2>
                <p>{t('Total')}: R${totalVendas.toLocaleString()}</p>
                <p>{t('Average Sales')}: R${mediaVendas.toLocaleString()}</p>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>{t('Registered Users')}:</h2>
                <p>{t('Total')}: {totalUsuarios}</p>
                <p>{t('This Day')}: {usuariosHoje}</p>
                <p>{t('This Month')}: {usuariosMes}</p>
            </Card>

            {/* Cards com gráficos */}
            <Card className={style.dashboardCard}>
                <h2>{t('Auction Chart')}</h2>
                <div className={style.chartContainer}>
                    <Chart type="pie" data={leiloesData} options={chartOptions} className={style.chart} />
                </div>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>{t('Sales Chart')}</h2>
                <div className={style.chartContainer}>
                    <Chart type="line" data={vendasData} options={chartOptions} className={style.chart} />
                </div>
            </Card>
            <Card className={style.dashboardCard}>
                <h2>{t('User Chart"')}</h2>
                <div className={style.chartContainer}>
                    <Chart type="bar" data={usuariosDiariosData} options={chartOptions} className={style.chart} />
                </div>
            </Card>
        </div>
    );
};

export default Dashboard;

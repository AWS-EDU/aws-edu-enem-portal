import BarChart, { Bar, NORTHSTAR_COLORS, YAxis, XAxis, Tooltip } from 'aws-northstar/charts/BarChart';
import AreaChart, { Area } from 'aws-northstar/charts/AreaChart';
import Container from 'aws-northstar/layouts/Container';


const sampleData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, },
];



function Page3() {
    return (
        <Container>
            <BarChart title="Bar Chart - two data series" width={1000} height={200} data={sampleData}>
                <Bar dataKey="pv" fill={NORTHSTAR_COLORS.ORANGE} stroke={NORTHSTAR_COLORS.ORANGE} />
                <Bar dataKey="uv" fill={NORTHSTAR_COLORS.BLUE} stroke={NORTHSTAR_COLORS.BLUE} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
            <AreaChart title="Area Chart - two data series" width={1000} height={200} data={sampleData}>
                <Area dataKey="pv" fill={NORTHSTAR_COLORS.GREEN} stroke={NORTHSTAR_COLORS.GREEN} />
                <Area dataKey="uv" fill={NORTHSTAR_COLORS.BLUE} stroke={NORTHSTAR_COLORS.BLUE} />
                <XAxis dataKey="name" angle={30} dy={10} />
                <YAxis />
                <Tooltip />
            </AreaChart>
        </Container>
    );
}

export default Page3;

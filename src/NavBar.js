const NavBar = () => {
    // commit request is a list of orders
    const [commitRequest, setCommitRequest] = useState([]);
    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const addOrder = (order) => {
        setCommitRequest([...commitRequest, order]);
        console.log(commitRequest);
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>
                        <FastfoodIcon/>
                        =3
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>xs=3</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <ControlPanel onSaveOrder={addOrder}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default NavBar;
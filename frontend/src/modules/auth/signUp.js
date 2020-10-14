import React  from 'react';
import { Paper, Grid, makeStyles, Input, Typography, Button, Checkbox} from '@material-ui/core'
import styles from './styles'
import { Link } from 'react-router-dom';

const componentStyles = makeStyles(styles)
const Cadastro = () => {
    const classes = componentStyles()


    return (<>
        <Paper
          className={classes.paper}
        >
            <Grid
                container
                className={classes.gridRoot}
                spacing={4}
                justify="center"
            >
                <Grid item>
                    <Typography
                        className={classes.titleComponent}
                    >
                        Cadastro 
                    </Typography>
                </Grid>
                
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.labelInput}
                    >
                        Nome 
                    </Typography>
                    <Input
                        placeholder="Digite seu nome"
                        rows={20}
                        fullWidth={true}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.labelInput}
                    >
                        Email 
                    </Typography>
                    <Input
                        placeholder="Digite seu email"
                        rows={20}
                        fullWidth={true}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.labelInput}
                    >
                        Senha 
                    </Typography>
                    <Input
                        placeholder="Digite sua senha"
                        rows={20}
                        fullWidth={true}
                        type = "password"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Typography
                        className={classes.labelInput}
                    >
                        Cofirmar senha 
                    </Typography>
                    <Input
                        placeholder="Digite sua senha novamente"
                        rows={20}
                        fullWidth={true}
                        type = "password"
                    />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    direction="row"
                >                
                    <Checkbox
                        value="checked"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                    <Typography
                        className={classes.labelInput}
                    >
                       Aceito os Termos de Condições
                    </Typography>
  
                </Grid>
                <Grid
                    direction="row"
                    container
                    className={classes.buttonGroup}
                    justify="flex-end"
                >
                    <Grid
                        item
                    >
                        <Link
                            to="/auth"
                        >
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                

                                Cadastrar
                                
                                
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>

    </>)
}


export default Cadastro
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar } from "@mui/material";

export default function NavBar() {
  return (
    <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <h2 className="text-2xl font-bold">LOGO</h2>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <>  </>
            </Grid>
            <Grid item xs={3}>
              <Link href="/">Home</Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="/NewCampaign">Lancer une Campagne de phising</Link>
            </Grid>
            <Grid item xs={4}>
              <Link href="/LaunchedCampaigns">Campagnes lancées</Link>
            </Grid>

          </Grid>
        </Toolbar>
    </AppBar>
  )
}
import * as React from "react"
import { 
    Box, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    Checkbox, 
    FormControlLabel, 
    FormLabel,
    RadioGroup, 
    Radio, 
    TextField 
} from '@mui/material';

export default function NewCampaign() {
    // Variables declaration
    const [textSource, setTextSource] = React.useState("habituelle");
    const [price, setPrice] = React.useState(0);
    const [tokenName, setTokenName] = React.useState("");
    const [tokenSymbol, setTokenSymbol] = React.useState("");
    const [tokenMetadatas, setTokenMetadatas] = React.useState("");
    const [isSoultBound, setIsSoultBound] = React.useState(false);
    const [isBurnable, setIsBurnable] = React.useState(false);
    const [royaltiesNumerator, setRoyaltiesNumerator] = React.useState(0);
    const [maxReads, setMaxReads] = React.useState(0);

    const [emails, setEmails] = React.useState(null);
    const [documentName, setDocumentName] = React.useState("");
    const [lastTxHash, setLastTxHash] = React.useState("0x");
    // status of the page 0: normal, 1: waiting for tx validation, 2: waiting for signature

    // function to get file uploaded
    function storeEmails(e) {
        const files = (e.target).files;
        if(files){
            const file = files[0];
            setEmails(file);
        }
    }
    function handleTextSource (event){
        setTextSource(event.target.value);
      };
    return (
        <Box sx={{ display: 'flex' , justifyContent: 'center', flexDirection: 'row', paddingTop: "50px", minWidth: "100%", minHeight: "400px" }}>
        <Box sx={{ display: 'flex' , justifyContent: 'center', flexDirection: 'column', minHeight: "100%" }}>
        {
            <Card sx={{ backgroundColor: "rgba(129, 115, 255, 0.5)", minHeight:"90%"}}>
                <CardHeader  title={"Laner une campagne"}/>
                <CardContent>
                    <Button variant="outlined" component="label">
                        Liste des emails
                        <input type="file" hidden onChange={storeEmails}/>
                    </Button>
                    {
                        emails 
                        ? <>    {emails.name}</> 
                        : <></>
                    }
                    <div></div>
                    <FormLabel id="text-source">Source du texte envoyé</FormLabel>
                    <RadioGroup
                        aria-labelledby="text-source"
                        value={textSource}
                        onChange={handleTextSource}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="habituelle" control={<Radio />} label="Habituelle" />
                        <FormControlLabel value="text" control={<Radio />} label="Entrer un texte" />
                        <FormControlLabel value="file" control={<Radio />} label="Choisir un fichier" />
                    </RadioGroup>
                    <div></div>
                    <TextField 
                        id="token-name" 
                        label="Name displayed on blockchain" 
                        variant="outlined"
                        value={tokenName}
                        onChange={(e) => setTokenName(e.target.value)}
                        margin="normal"
                    />
                    
                </CardContent>
                <CardActions>
                    <Button>Create</Button>
                </CardActions>
            </Card>
        }
        
        </Box>
        </Box>
    )
}

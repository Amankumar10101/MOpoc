import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import '../page.css';
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import MoButton from "@/components/MoButton/MoButton";
import Headline from "@/components/Typography/Headline";

export default function Wallet() {
    return (
        <div className="wallet-container">
            <Headline text='Connect Wallet' />
            <div className="wallet-sub-container">
                <Card className="hashpack-card">
                <Avatar sx={{width:"60px" , height:"60px"}} className="haspack-avatar" alt="Remy Sharp" src="/Image/hashpack.png" />
                <h5>HashPack</h5>
                </Card>
                <MoButton width="100%" variant="contained" name="Connect" />
            </div>
            <p className="wallet-typography">By Connecting your wallet, you agree to our<span className="signUp-link">Terms of Services</span> and Our<span className="signUp-link"> Privacy Policy.</span></p>
        </div>
    );
}
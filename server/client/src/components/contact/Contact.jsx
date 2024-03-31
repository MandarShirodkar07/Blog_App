import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8); /* Add a semi-transparent white background */
    border-radius: 10px; /* Add rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    text-align: center;
`;

const Heading = styled(Typography)`
    color: #333; /* Darken the text color */
    font-weight: bold; /* Make the text bold */
`;

const Text = styled(Typography)`
    color: #555; /* Slightly darken the secondary text color */
    margin-top: 20px; /* Adjust the margin */
    font-weight: bold; /* Make the text bold */
`;

const StyledLink = styled(Link)`
    color: #007bff; /* Change the link color to a blue shade */
    margin: 0 5px; /* Add some space between the links */
`;

const Head = styled(Box)`
    display: flex;
    flex-direction: column;
`

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Heading variant="h3">Getting in touch is easy!</Heading>
                <Text variant="h5">
                    Reach out to me on

                    <StyledLink href="https://www.instagram.com/codeforinterview/" target="_blank">
                        <Instagram/>
                    </StyledLink>
                    or send me an Email 
                    <StyledLink href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank">
                        <Email />
                    </StyledLink>.
                    <Head>
                    <Typography>Name: Mandar Prakash Shirodkar</Typography>
                    <Typography>Email: mndrshirodkar@gmail.com</Typography>
                    <Typography>Phone_No: 7057508607</Typography>
                    </Head>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;

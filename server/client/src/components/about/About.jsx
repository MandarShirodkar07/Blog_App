import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 40px; /* Increase padding for more space */
    background-color: rgba(255, 255, 255, 0.9); /* Add a semi-transparent white background */
    border-radius: 15px; /* Add rounded corners */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
    text-align: center;
`;

const Heading = styled(Typography)`
    color: #333; /* Darken the text color */
    font-weight: bold; /* Make the text bold */
    margin-bottom: 20px; /* Add space below the heading */
`;

const Text = styled(Typography)`
    color: #555; /* Slightly darken the secondary text color */
    margin-top: 20px; /* Adjust the margin */
    font-weight: bold; /* Make the text bold */
`;

const StyledLink = styled(Link)`
    color: #007bff; /* Change the link color to a blue shade */
    margin: 0 10px; /* Add more space between the links */
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Heading variant="h3">(MSD)_Mandar Shirodkar..</Heading>
                <Text variant="h5">
                    I'm a Software Engineer based in India. 
                    I've built websites, desktop applications, and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <StyledLink href="https://github.com/kunaltyagi9" target="_blank"><GitHub /></StyledLink>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have a chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <StyledLink href="https://www.instagram.com/codeforinterview/" target="_blank">
                            <Instagram />
                        </StyledLink>
                    </Box>  
                    or send me an Email 
                    <StyledLink href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank">
                        <Email />
                    </StyledLink>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;

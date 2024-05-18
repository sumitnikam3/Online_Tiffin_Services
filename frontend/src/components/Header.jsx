import { Alert, Container } from "react-bootstrap";

export function Header(props) {
    return (
        <Container>
            <Alert varient="sucess"><h5>
                {props.title} </h5>
                <p>
                    Here you can perform all admin related work
                </p>
            </Alert>
        </Container>
    );
}
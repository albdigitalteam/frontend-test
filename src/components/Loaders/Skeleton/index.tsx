import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Skeleton } from '@material-ui/lab';
import './styles.css';

const mapNumber = new Array(Math.floor(window.innerHeight / 400) + 1).fill(null);

const Media = () => (
    <>
        <Skeleton
           height={80}
           width={700}
        />
        { mapNumber.map((key, index) =>
            <Card
                classes={{
                    root: 'card',
                }}
                key={index}
            >
                <CardHeader
                    title={
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    }
                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                />
                <Skeleton
                    classes={{
                        root: 'media',
                    }}
                    animation="wave"
                    variant="rect"
                />
                <CardContent>
                    <>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} />
                    </>
                </CardContent>
            </Card>
        )}
    </>
);

export default Media;


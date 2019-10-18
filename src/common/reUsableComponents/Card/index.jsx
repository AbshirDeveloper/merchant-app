import React, { Children } from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
const useStyles = createStyles({
  card: {
  }
});

class TotalCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        {this.props.children}
      </Card>
    );
  }
}

export default withStyles(useStyles)(TotalCard)

import React from 'react'
import MenuItem from '../menu-item/MenuItem.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import './Directory.styles.scss';

const Directory = ({ sections }) => {
  
  const allSections = sections.map(({id, ...otherSectionProps}) => (
    <MenuItem 
      key={id}
      {...otherSectionProps}
    />
  ));

  return (
    <div className="directory-menu">
      {allSections}
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
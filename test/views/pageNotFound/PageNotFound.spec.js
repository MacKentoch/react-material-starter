import React                from 'react';
import {
  shallow
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import PageNotFound         from '../../../src/app/views/pageNotFound/PageNotFound';

chai.use(dirtyChai);

describe('PageNotFound VIEW ', () => {
  it('should render "PageNotFound" view', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).to.exist();
  });
});

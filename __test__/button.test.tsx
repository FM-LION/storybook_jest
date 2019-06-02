import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import Button from '../components/Button';
import sum from '../components/Sum';

//fixed https://github.com/airbnb/enzyme/issues/1284
const adapter = ReactSixteenAdapter as any;
configure({ adapter: new adapter.default() });

describe('測試', () => {
  it('test 1 plus 2 result', () => {
    expect(sum(1 , 2)).toBe(3);
  })

  it('Button snapshot', ()=> {
    const mockCallBack = jest.fn();
    const element = shallow(<Button action={mockCallBack} text="Check Button"/>);
    element.find('div').simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });


  it('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('test int', () => {
    expect(5).toBe(5)
    expect(5).toEqual(5)

    //測試輸出值是否大於期望值
    expect(5).toBeGreaterThan(4)

    //測試輸出值是否大於等於期望值
    expect(5).toBeGreaterThanOrEqual(5)

    //測試輸出值是否小於期望值
    expect(5).toBeLessThan(6)

    //測試輸出值是否小於期望值
    expect(5).toBeLessThanOrEqual(5)
  })

  test('Test float', () => {
    //會忽略些微的誤差
    expect(0.1 + 0.2).toBeCloseTo(0.3)
    //需完全相等
    // expect(0.1 + 0.2).toBe(0.3)

  })

  test('For array test in jest',()=>{
    let arrA = ['A','B','C']

    //檢查陣列內是否含有某值
    expect(arrA).toContain('B')
    
    //搭配迴圈檢查每個位置都不等於空
    for(let i in arrA){
        expect(arrA[i]).not.toBe('')
    }
  })

  test('Special value',()=>{
    //期望值為 true
    expect(true).toBeTruthy()
    
    //期望值為 false
    expect(false).toBeFalsy()

    //期望值為 null
    expect(null).toBeNull()

    //期望值為 undefined
    expect(undefined).toBeUndefined()

    //期望值為 undefined 之外的值
    expect(null).toBeDefined()
  })

    
});
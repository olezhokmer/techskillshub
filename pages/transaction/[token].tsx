import CheckoutStatus from 'components/checkout-status';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TransactionProduct } from 'types';
import { getTransaction } from 'utils/server';
import Layout from '../../layouts/Main';

const TransactionPage = () => {
	const router = useRouter();
  const [products, setProducts] = useState([] as TransactionProduct[]);

  useEffect(() => {
    const { token } = router.query;

    const fetchProducts = async () => {
      const products = await getTransaction(String(token));

      // @ts-ignore:next-line
      setProducts(products);
      return;
    }
    
    fetchProducts();
  }, [router.query]);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <section className="cart">
				<div className="container">
					<div className="cart__intro">
						<h3 className="cart__title">Purchased courses</h3>
						<CheckoutStatus step="download" />
					</div>

					<div className="cart-list">
						{products?.length &&
							<table>
								<tbody>
									<tr>
										<th style={{textAlign: 'left'}}>Product</th>
										<th>Download</th>
									</tr>

									{products.map(item => (
										<tr>
											<td>
												<div className="cart-product">
													<div className="cart-product__img">
														<img src={item.images[0]} alt="" />
													</div>
								
													<div className="cart-product__content">
														<h3>{item.name}</h3>
														<p>#{item.id}</p>
													</div>
												</div>
											</td>
											<td className="cart-item-cancel">
												<a href={item.fileUrl} download={item.id + '.txt'}>
													<button type="button" className="btn btn--rounded btn--border">
														Download
													</button>
												</a>
													
											</td>
										</tr>
									))}
								</tbody>
							</table> 
						} 
					</div>

					<div className="cart-actions">
						<a href="/products" className="cart__btn-back"><i className="icon-left"></i> Continue Shopping</a>
					</div>
				</div>
    	</section>
      
    </Layout>
  )
}


export default TransactionPage;
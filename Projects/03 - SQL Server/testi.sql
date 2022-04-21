-- i) Të afishohet referenca e kredive, si dhe shuma totale e tyre, për të gjitha kreditë aktive, të cilat kanë kod statusi që fillon me "Approved".
SELECT	l.loan_ref_no, l.loan_amount 
FROM	loan l inner join
		loan_status st on l.status_id = st.id
WHERE	is_active=1 and status_code like 'Approved%'







-- ii) Të afishohet shuma totale e kredive të disbursuara në vlerë monetare dhe kodi i monedhës së tyre, për çdo klient, të renditura nga kredia me vlerë më të madhe, te kredia me vlerë më të vogël për monedhën specifike.
SELECT		client_id, sum(l.loan_amount) as total_amount, c.currency_code
FROM		loan l inner join
			currency c on l.currency_id = c.id
WHERE		is_disbursed = 1 
group by	client_id, c.currency_code
order by	client_id, sum(loan_amount)






-- iii) Të afishohen referencat e kredive, vlera monetare, kodi i monedhës, përshkrimi i statusit dhe shuma totale e kësteve të pa paguara; për të gjitha kreditë që kanë këste të papaguara me datë maturimi më te vogël ose të barabartë se data aktuale, për ato kredi që kanë më shumë se 2 këstë të papaguara.
-- Zgjidhja Menyra 1:
SELECT		max(l.loan_ref_no), max(l.loan_amount), max(c.currency_code), max(st.status_description), sum(li.amount)
FROM		loan l inner join
			currency c on l.currency_id = c.id inner join
			loan_status st on l.status_id = st.id inner join 
			loan_installment li on li.loan_id = l.loan_id
WHERE		li.is_paid = 0 and li.maturity_date <=getdate()
group by	li.loan_id
having		count(*)>2


-- Zgjidhja Menyra 2:
SELECT		l.loan_ref_no, l.loan_amount, c.currency_code, st.status_description, unpaid_installments
FROM		loan l inner join 
			(	SELECT		li.loan_id, sum(amount) as unpaid_installments
				FROM		loan_installment li 
				WHERE		is_paid = 0 and maturity_date <= getdate()
				group by	li.loan_id
				having		count(*)>2
			) as aa on aa.loan_id = l.loan_id inner join
			currency c on l.currency_id = c.id inner join
			loan_status st on l.status_id = st.id







-- iv) Të afishohen referencat e kredive, që kanë kolaterale me vlerë më të madhe se mesatarja e të gjithë kolateraleve.
SELECT		l.loan_ref_no
FROM		loan l inner join 
			loan_collateral lcol on lcol.loan_id = l.loan_id inner join
			collateral col on l.loan_id = col.id 
WHERE		colalteral_value > (
				SELECT	avg(colalteral_value)
				FROM	collateral
			)







-- c) Të ndërtohet një funksion në databazë, i cili kthen vlerën e këstit të radhës për t'u paguar, për një kredi specifike. 
CREATE FUNCTION getNextInstallmentAmount
(
	@loanId as int
)
RETURNS decimal(19,2)
AS
BEGIN
	DECLARE @ResultVar as decimal(19,2)

		SET @ResultVar = 
		(
			SELECT loan_installment.amount 
			FROM	loan_installment 
			WHERE	maturity_date= (
							SELECT	min(maturity_date) 
							FROM	loan_installment
							WHERE	loan_id = @loanId and is_paid = 0)
		)

	RETURN @loanId
END







-- d) Të ndërtohet një procedurë, e cila modifikon datën e pagesës të të gjithë kësteve të një kredie me datën aktuale, si dhe e cakton këstin si të paguar, për të gjitha kreditë që janë disbursuar në një datë specifike.
CREATE PROCEDURE update_installment_date 
	@dateDisbursed as date
AS
BEGIN
	SET NOCOUNT ON;

    UPDATE	loan_installment
	SET		payment_date = getdate(), is_paid = 1
	WHERE	loan_id in ( select loan_id from loan where disbursed_date = @dateDisbursed)

END
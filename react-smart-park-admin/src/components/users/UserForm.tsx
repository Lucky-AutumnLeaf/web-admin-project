import type { UserListResponseType } from '@/types/user'
import { Col, Form, Input, Modal, Radio, Row } from 'antd'
import { useEffect } from 'react'

type UserFormProps = {
  title: string
  open: boolean
  initialValues?: Partial<UserListResponseType>
  onDisable: () => void
  onSubmit: (values: UserListResponseType) => void
}

const UserForm = ({
  title,
  open,
  initialValues,
  onDisable,
  onSubmit
}: UserFormProps) => {
  const [form] = Form.useForm()
  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues)
    }
  }, [initialValues, form])
  const handleOk = () => {
    form.validateFields().then((values) => {
      onSubmit(values as UserListResponseType)
      form.resetFields()
    })
  }

  const handleCancel = () => {
    form.resetFields()
    onDisable()
  }

  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      width={720}
    >
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        preserve={false}
      >
        <Form.Item name="id" hidden />
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="客户名称"
              name="name"
              rules={[{ required: true, message: '请输入客户名称' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="联系电话"
              name="tel"
              rules={[{ required: true, message: '请输入联系电话' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="经营状态"
              name="status"
              rules={[{ required: true, message: '请选择经营状态' }]}
            >
              <Radio.Group>
                <Radio value="1">营业中</Radio>
                <Radio value="2">暂停营业</Radio>
                <Radio value="3">已关闭</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="所属行业"
              name="business"
              rules={[{ required: true, message: '请输入所属行业' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入正确的邮箱格式' }
              ]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="统一信用代码"
              name="creditCode"
              rules={[{ required: true, message: '请输入统一信用代码' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="工商注册号"
              name="industryNum"
              rules={[{ required: true, message: '请输入工商注册号' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="组织机构代码"
              name="organizationCode"
              rules={[{ required: true, message: '请输入组织机构代码' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              label="法人名"
              name="legalPerson"
              rules={[{ required: true, message: '请输入法人名' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}
export default UserForm

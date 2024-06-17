import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { getEnergyProducts, createEnergyProduct, updateEnergyProduct, deleteEnergyProduct } from '../../services/energyProductService';
import tableConfig from '../table-configs/product-table.json';
import { IColumnConfigs } from '../../models/ITableConfig';
import { EnergyProduct, EnergyProductDTO } from '../../models/IBioEnergyProduct';


const EnergyProductDataGrid: React.FC = () => {
  const [energyProducts, setEnergyProducts] = useState<EnergyProduct[]>([]);
  const [selectedEnergyProduct, setSelectedEnergyProduct] = useState<EnergyProduct | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<EnergyProductDTO>({
    cnCode: '',
    bulName: '',
    name: '',
    biotech: false,
    description: ''
  });

  useEffect(() => {
    fetchEnergyProducts();
  }, []);

  const fetchEnergyProducts = async () => {
    try {
      const response = await getEnergyProducts();
      setEnergyProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch energy products', error);
    }
  };

  const handleAddClick = () => {
    setSelectedEnergyProduct(null);
    setFormValues({
      cnCode: '',
      bulName: '',
      name: '',
      biotech: false,
      description: ''
    });
    setOpen(true);
  };

  const handleEditClick = (energyProduct: EnergyProduct) => {
    setSelectedEnergyProduct(energyProduct);
    setFormValues({
      cnCode: energyProduct.cnCode,
      bulName: energyProduct.bulName,
      name: energyProduct.name,
      biotech: energyProduct.biotech,
      description: energyProduct.description
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteEnergyProduct(id);
      fetchEnergyProducts();
    } catch (error) {
      console.error('Failed to delete energy product', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedEnergyProduct) {
        await updateEnergyProduct(selectedEnergyProduct.id, formValues);
      } else {
        await createEnergyProduct(formValues);
      }
      fetchEnergyProducts();
      handleClose();
    } catch (error) {
      console.error('Failed to save energy product', error);
    }
  };
  const parseColumns = (configJson: IColumnConfigs): GridColDef[] => {
    const columns: GridColDef[] = Object.values(configJson).map(config => ({
      field: config.field,
      headerName: config.headerName,
      flex: config.flex,
    }));
  
    // Adding the last column with the buttons
    columns.push({
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEditClick(params.row as EnergyProduct)}>Edit</Button>
          <Button onClick={() => handleDeleteClick((params.row as EnergyProduct).id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  
  const columns = parseColumns(tableConfig);
  
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add Energy Product</Button>
      <DataGrid rows={energyProducts} columns={columns}/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedEnergyProduct ? 'Edit Energy Product' : 'Add Energy Product'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="CN Code"
            type="text"
            fullWidth
            value={formValues.cnCode}
            onChange={(e) => setFormValues({ ...formValues, cnCode: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Bulgarian Name"
            type="text"
            fullWidth
            value={formValues.bulName}
            onChange={(e) => setFormValues({ ...formValues, bulName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.biotech}
                onChange={(e) => setFormValues({ ...formValues, biotech: e.target.checked })}
              />
            }
            label="Biotech"
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={formValues.description}
            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EnergyProductDataGrid;

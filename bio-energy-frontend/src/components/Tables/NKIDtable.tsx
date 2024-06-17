import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { getNKIDs, createNKID, updateNKID, deleteNKID } from '../../services/nkidService';
import tableConfig from '../table-configs/nkid-table.json';
import { IColumnConfigs } from '../../models/ITableConfig';
import { NKID, NKIDDTO } from '../../models/INKID';

const NKIDDataGrid: React.FC = () => {
  const [nkids, setNKIDs] = useState<NKID[]>([]);
  const [selectedNKID, setSelectedNKID] = useState<NKID | null>(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState<NKIDDTO>({
    category: '',
    groupKID: '',
    sector: '',
  });

  useEffect(() => {
    fetchNKIDs();
  }, []);

  const fetchNKIDs = async () => {
    try {
      const response = await getNKIDs();
      setNKIDs(response.data);
    } catch (error) {
      console.error('Failed to fetch NKIDs', error);
    }
  };

  const handleAddClick = () => {
    setSelectedNKID(null);
    setFormValues({
      category: '',
      groupKID: '',
      sector: '',
    });
    setOpen(true);
  };

  const handleEditClick = (nkid: NKID) => {
    setSelectedNKID(nkid);
    setFormValues({
      category: nkid.category,
      groupKID: nkid.groupKID,
      sector: nkid.sector
    });
    setOpen(true);
  };

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteNKID(id);
      fetchNKIDs();
    } catch (error) {
      console.error('Failed to delete NKID', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      if (selectedNKID) {
        await updateNKID(selectedNKID.id, formValues);
      } else {
        await createNKID(formValues);
      }
      fetchNKIDs();
      handleClose();
    } catch (error) {
      console.error('Failed to save NKID', error);
    }
  };
  const parseColumns = (configJson:IColumnConfigs): GridColDef[] => {
    const columns: GridColDef[] = Object.values(configJson).map(config => ({
      field: config.field,
      headerName: config.headerName,
      flex: config.flex
    }));
  
    // Adding the last column with the buttons
    columns.push({
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEditClick(params.row as NKID)}>Edit</Button>
          <Button onClick={() => handleDeleteClick((params.row as NKID).id)}>Delete</Button>
        </>
      ),
    });
  
    return columns;
  };
  
  const columns = parseColumns(tableConfig);
  
  return (
    <div style={{ height: 600, width: '100%' }}>
      <Button onClick={handleAddClick}>Add NKID</Button>
      <DataGrid rows={nkids} columns={columns} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedNKID ? 'Edit NKID' : 'Add NKID'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category"
            type="text"
            fullWidth
            value={formValues.category}
            onChange={(e) => setFormValues({ ...formValues, category: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Group KID"
            type="text"
            fullWidth
            value={formValues.groupKID}
            onChange={(e) => setFormValues({ ...formValues, groupKID: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Sector Name"
            type="text"
            fullWidth
            value={formValues.sector}
            onChange={(e) => setFormValues({ ...formValues, sector: e.target.value })}
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

export default NKIDDataGrid;
